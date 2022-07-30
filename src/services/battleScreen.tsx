import {Application, Graphics, Container, Loader, TextStyle, Sprite, Text} from 'pixi.js'
import GameService from './gameService';
import windowGenerator from './windowGenerator';
import buttonGenerator from './buttonGenerator';
import RuneGenerator from './runeGenerator';
import Rune from './rune';
import Deck from './deck';

function BattleScreen(App: GameService): Container {
    const style = new TextStyle({
        fontFamily: "Minecraft"
    });
    const windowContainer = windowGenerator("parchment", 12, 20, App.loader);

    const iconMenu = new Sprite(App.loader.resources["button"]!.spritesheet!.textures["buttons_4x14.png"]);
    const buttonMenu = buttonGenerator("normal", 2, iconMenu, () => {App.router("startScreen")}, App.loader);
    buttonMenu.x = 5;
    buttonMenu.y = 5;
    windowContainer.addChild(buttonMenu);

    const deck = new Deck(App);
    deck.x = App.screen.width / 2 - deck.width / 2;
    deck.y = windowContainer.height - deck.height;
    windowContainer.addChild(deck);
    
    deck.drawRunes(6);
    let timer = 0;
    let second = 4;
    const textTimer = new Text(second, style)
    textTimer.x = 40;
    textTimer.y = windowContainer.height - deck.handWindow.height - (textTimer.height /2) -4;
    windowContainer.addChild(textTimer);
    App.ticker.add((d) => {
        timer ++;
        textTimer.text = second + "";
        if(timer % 60 === 0){
            second --;
        }
        if (timer === App.tickInterval ) {
            timer = 0;
            deck.drawRunes(1);
            console.log("turn");
            second = 4;
            
        }
    });
    return windowContainer;
}

export default BattleScreen;