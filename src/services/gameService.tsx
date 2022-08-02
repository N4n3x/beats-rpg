import { Application, IApplicationOptions, Sprite, settings, SCALE_MODES, Graphics, Container, Spritesheet, BaseTexture, Loader, LoaderResource, Texture } from 'pixi.js'
import StartScreen from './startScreen';
import BattleScreen from './battleScreen';

const TICK_INTERVAL = 240;
const options: IApplicationOptions = {
    width: 384,
    height: 640,
    antialias: true,
    resolution: 1,
};
interface IGameService extends Application {
    router: (screen: string) => void;
}
class GameService extends Application {
    private static instance: GameService; 
    public tickInterval: number;

    private constructor() {
        super(options);
        this.tickInterval = TICK_INTERVAL;
    }

    public static getInstance(): GameService {
        if (!GameService.instance) {
            GameService.instance = new GameService();
        }
        return GameService.instance;
    }
    
    public router(screenName: string): void{
        this.stage.removeChildren();
        switch(screenName){
            case "startScreen":
                const startScreenContainer = StartScreen(this);
                this.stage.addChild(startScreenContainer);
                break;
            case "battleScreen":
                const battleScreenContainer = BattleScreen(this);
                this.stage.addChild(battleScreenContainer);
                break;
        }
    }
}

export default GameService;