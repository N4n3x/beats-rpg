import {Application, Container, Loader, TextStyle, Sprite} from 'pixi.js'
import GameService from './gameService';
import windowGenerator from './windowGenerator';
import buttonGenerator from './buttonGenerator';
import RuneGenerator from './runeGenerator';

function BattleScreen(App: GameService): Container {
    const container = new Container();
    const style = new TextStyle({
        fontFamily: "Minecraft"
    });

    const windowContainer = windowGenerator("parchment", 11, 18, App.loader);
    windowContainer.x = App.screen.width / 2 - windowContainer.width / 2;
    windowContainer.y = 74 
    container.addChild(windowContainer);

    const iconMenu = new Sprite(App.loader.resources["button"]!.spritesheet!.textures["buttons_4x14.png"]);
    const buttonMenu = buttonGenerator("normal", 2, iconMenu, () => {App.router("startScreen")}, App.loader);
    buttonMenu.x = 5;
    buttonMenu.y = 5;
    container.addChild(buttonMenu);

    const deckWindow = windowGenerator("littleWood1", 11, 4, App.loader);
    deckWindow.x = App.screen.width / 2 - deckWindow.width / 2;
    deckWindow.y = container.height - deckWindow.height;
    container.addChild(deckWindow);

    const rune1 = RuneGenerator("icon_heart", App);
    rune1.x = 32 + 8;
    rune1.y = 64 - 16;
    deckWindow.addChild(rune1);

    const rune2 = RuneGenerator("icon_soul", App);
    rune2.x = rune1.x + rune1.width + 16;
    rune2.y = 64 - 16;
    deckWindow.addChild(rune2);

    const rune3 = RuneGenerator("icon_strength", App);
    rune3.x = rune2.x + rune2.width + 16;
    rune3.y = 64 - 16;
    deckWindow.addChild(rune3);

    const rune4 = RuneGenerator("icon_lightning", App);
    rune4.x = rune3.x + rune3.width + 16;
    rune4.y = 64 - 16;
    deckWindow.addChild(rune4);

    const rune5 = RuneGenerator("icon_luck", App);
    rune5.x = rune4.x + rune4.width + 16;
    rune5.y = 64 - 16;
    deckWindow.addChild(rune5);

    const rune6 = RuneGenerator("icon_armor", App);
    rune6.x = rune5.x + rune5.width + 16;
    rune6.y = 64 - 16;
    deckWindow.addChild(rune6);

    return container;
}

export default BattleScreen;