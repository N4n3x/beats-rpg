import {
    Application,
    Sprite,
    settings,
    SCALE_MODES,
    Graphics,
    Container,
    Spritesheet,
    BaseTexture,
    Loader,
    LoaderResource,
    Texture,
    TextStyle,
    Text
} from "pixi.js";
import buttonGenerator from './buttonGenerator';
import windowGenerator from './windowGenerator';
import GameService from './gameService';

const StartScreen = (App: GameService): Container => {
    const container = new Container();
    const style = new TextStyle({
        fontFamily: "Minecraft"
    });
    const windowContainer = windowGenerator("fullBlack", 9, 16,App.loader);
    windowContainer.x = App.screen.width / 2 - windowContainer.width / 2;
    windowContainer.y = App.screen.height / 2 - windowContainer.height / 2; 
    container.addChild(windowContainer);
    
    const text = new Text('BEATS RPG', style);
    text.x = windowContainer.width / 2 - text.width / 2;
    text.y = windowContainer.height / 12 - text.height / 2; 
    windowContainer.addChild(text);
    
    const contentContainer = new Container();
    const buttonText = new Text('Start', style);
    contentContainer.addChild(buttonText);
    const buttonContainer = buttonGenerator("normal", 4, contentContainer, () => {App.router("battleScreen")}, App.loader);
    buttonContainer.x = windowContainer.width / 2 - buttonContainer.width / 2;
    buttonContainer.y = windowContainer.height / 2 - buttonContainer.height / 2;
    windowContainer.addChild(buttonContainer);
    
    return container;
}

function menuAction(this: Container): void{
    console.log(this);
}

export default StartScreen;