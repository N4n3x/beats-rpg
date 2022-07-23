import GameService from "./gameService";
import { Container, Sprite } from "pixi.js";
import runes from "./runes.json";

class Deck {
    public runes: Array<Sprite>;
    public size: number;
    public renderTarget: Container;
    public maxSize: number;

    constructor(renderTarget: Container) {
        this.runes = [];
        this.size = this.runes.length;
        this.renderTarget = renderTarget;
        this.maxSize = 6;
    }

    public addRune(rune: Sprite): void {
        if (this.size < this.maxSize) {
            this.runes.push(rune);
            this.size = this.runes.length;
        }else{
            console.log("Deck is full");
        }
    }

    public removeRune(rune: Sprite): void {
        if(this.runes.includes(rune)){
            this.runes.splice(this.runes.indexOf(rune), 1);
            this.size = this.runes.length;
        }else{
            console.log("Rune not found");
        }
    }

    public render(): void {
        this.renderTarget.removeChildren();
        this.runes.forEach(rune => {
            this.renderTarget.addChild(rune);
        });
    }
}