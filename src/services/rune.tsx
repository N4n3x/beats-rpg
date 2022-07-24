import GameService from "./gameService";
import { Container, Sprite } from "pixi.js";
import runes from "./runes.json";

interface IRune {
    name: string;
    icon: string;
}

type ObjectKey = keyof typeof runes.runes | null;
class Rune extends Sprite {
    public key: ObjectKey;
    public data: IRune;
    public title: string;
    public icon: Sprite;

    constructor(App: GameService, key: ObjectKey = null) {
        super(App.loader.resources["gui"]!.spritesheet!.textures["background_parchment"]);
        if(key === null){
            this.key = this.setRandomRune();
        }else{
            this.key = key;
        }
        this.data = runes.runes[this.key!];
        this.title = this.data.name;
        this.icon = new Sprite(App.loader.resources["gui"]!.spritesheet!.textures[this.data.icon]);
        this.addChild(this.icon);
    }

    // public set(name: string): Rune {
    //     this.icon = icon;
    //     return this;
    // }

    // public setBackground(background: string): Rune {
    //     this.sprite.texture = GameService.loader.resources[background].texture;
    //     return this;
    // }

    public getRunesListe(): Array<ObjectKey> {
        const keys = Object.keys(runes.runes) as Array<ObjectKey>;
        return keys;
    }

    setRandomRune(): ObjectKey {
        const keys: Array<string> = Object.keys(runes.runes);
        return keys[Math.floor(Math.random() * keys.length)] as ObjectKey;
    }
}

export default Rune;