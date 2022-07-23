import {Application, Container, Loader, TextStyle, Sprite} from 'pixi.js'
import GameService from './gameService';
import windowGenerator from './windowGenerator';
import buttonGenerator from './buttonGenerator';
function BattleScreen(App: GameService): Container {
    const container = new Container();
    const style = new TextStyle({
        fontFamily: "Minecraft"
    });
    const windowContainer = windowGenerator("fullBlack", 11, 20, App.loader);
    windowContainer.x = App.screen.width / 2 - windowContainer.width / 2;
    windowContainer.y = App.screen.height / 2 - windowContainer.height / 2; 
    container.addChild(windowContainer);
    const iconMenu = new Sprite(App.loader.resources["button"]!.spritesheet!.textures["buttons_4x14.png"]);
    const buttonMenu = buttonGenerator("normal", 2, iconMenu, () => {App.router("startScreen")}, App.loader);
    buttonMenu.x = 5;
    buttonMenu.y = 5;
    windowContainer.addChild(buttonMenu);
    return container;
}

export default BattleScreen;