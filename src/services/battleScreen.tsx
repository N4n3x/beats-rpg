import {Application, Container, Loader, TextStyle, Sprite} from 'pixi.js'
import GameService from './gameService';
import windowGenerator from './windowGenerator';
import buttonGenerator from './buttonGenerator';
import RuneGenerator from './runeGenerator';
import Rune from './rune';
import Deck from './deck';

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

    const deck = new Deck(App, deckWindow);
    deck.drawRunes(6);
    deck.render();
    App.ticker.add((d) => {
        deck.drawRunes(1);
        deck.render();
        // console.log(d);
        
    });
    return container;
}

export default BattleScreen;