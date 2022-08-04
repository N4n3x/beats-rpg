import { Application, Ticker } from "pixi.js";
import App from "./gameService";

export default class GameLoop {
    private static instance: GameLoop;
    private line: Array<Array<Function>> = [];
    private app: Application;
    public timestamp: number = 0;
    public second: number = 0;

    private constructor() {
        this.app = App.getInstance();
        this.app.ticker.add(()=>this.run());
    }

    public static getInstance(): GameLoop {
        if (!GameLoop.instance) {
            GameLoop.instance = new GameLoop();
        }
        return GameLoop.instance;
    }

    public loop(): void {
        this.addAction(1, () => console.log("action1"));
        this.addAction(4, () => console.log("action41"));
        this.addAction(4, () => console.log("action42"));
        console.log(this.line);
    }

    public addAction(lane: number, action: Function): void {
        if (!Array.isArray(this.line[lane])) {
            this.line[lane] = [];
        }
        this.line[lane].push(action);
    }

    public getAction(lane: number): Array<Function> {
        return this.line[lane];
    }

    public run(): void {
        this.timestamp ++;
        if (this.timestamp % 60 === 0) {
            this.second ++;
            const actions = this.getAction(this.second);
            console.log(this.line);
        }
    }
}