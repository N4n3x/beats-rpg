import GameService from "./gameService";
import { Container, Sprite } from "pixi.js";
import Rune from "./rune";
import runes from "./runes.json";

const HAND_MAX_SIZE = 6;
type ObjectKey = keyof typeof runes.runes | null;

class Deck {
    public runes: Array<Rune>;
    public hand: Array<Rune>;
    public renderTarget: Container;

    constructor(App: GameService,renderTarget: Container) {
        this.runes = [];
        this.hand = [];
        this.renderTarget = renderTarget;
        const keys = Object.keys(runes.runes) as Array<ObjectKey>;
        keys.forEach(key => {
            this.runes.push(new Rune(App, key));
        });
    }

    public addRuneToHand(rune: Rune): Deck {
        if (this.hand.length < HAND_MAX_SIZE) {
            this.hand.push(rune);
        }else{
            console.log("Deck is full");
        }
        return this;
    }

    public drawRune(): Rune | null {
        if(this.hand.length < HAND_MAX_SIZE){
            let randIndex = [];
            for(let i = 0; i < this.runes.length; i++){
                randIndex.push(i);
            }
            randIndex = randIndex.sort(() => Math.random() - 0.5);
            let rune: Rune | null = null;
            for(let i = 0; i < randIndex.length; i++){
                rune = this.runes[randIndex[i]];
                if(this.hand.includes(rune)){
                    continue;
                }else{
                    this.hand.push(rune);
                    break;
                }
            }   
            return rune;
        }else{
            return null;
        }
    }


    public removeRune(rune: Rune): Deck {
        if(this.hand.includes(rune)){
            this.hand.splice(this.hand.indexOf(rune), 1);
        }else{
            console.log("Rune not found");
        }
        return this;
    }

    public render(): Deck {
        this.renderTarget.children.forEach(element => {
            if(element instanceof Rune){
                this.renderTarget.removeChild(element);
            }
        });
        for(let i = 0; i < this.hand.length; i++){
            this.renderTarget.addChild(this.hand[i]);
            if(i === 0){
                this.hand[i].x = 40;
                
            }else{
                this.hand[i].x = this.hand[i-1].x + this.hand[i-1].width + 16;
            }
            this.hand[i].y = this.renderTarget.height / 2 - this.hand[i].height / 2;
        }
        return this;
    }
}

export default Deck;