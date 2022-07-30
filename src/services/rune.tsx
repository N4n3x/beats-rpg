import GameService from "./gameService";
import { Container, Sprite } from "pixi.js";
import runes from "./runes.json";
import Deck from "./deck";

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
    public context: Container | Deck;

    constructor(App: GameService, context: Container, key: ObjectKey = null) {
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
        this.interactive = true;
        this.buttonMode = true;
        this.context = context;
        this.on("pointerdown", this.onClick);
    }

    public getRunesListe(): Array<ObjectKey> {
        const keys = Object.keys(runes.runes) as Array<ObjectKey>;
        return keys;
    }

    setRandomRune(): ObjectKey {
        const keys: Array<string> = Object.keys(runes.runes);
        return keys[Math.floor(Math.random() * keys.length)] as ObjectKey;
    }

    onClick(): void {
        // TODO: Trouver une autre méthode pour récupérer le container parent
        if("hand" in this.context && "lane" in this.context){
            this.context.handToLane(this);
        }
    }
}

export default Rune;