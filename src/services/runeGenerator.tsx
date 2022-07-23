import GameService from "./gameService";
import { Container, Sprite } from "pixi.js";

function RuneGenerator(icon: String, App: GameService): Container {
    let iconIndex = icon + ""
    const rune = new Sprite(App.loader.resources["gui"]!.spritesheet!.textures["background_parchment"]);
    const iconSprite = new Sprite(App.loader.resources["gui"]!.spritesheet!.textures[iconIndex]);
    // iconSprite.x = rune.width / 2 - iconSprite.width / 2;
    // iconSprite.y = rune.height / 2 - iconSprite.height / 2;
    rune.addChild(iconSprite);

    return rune;
}

export default RuneGenerator;