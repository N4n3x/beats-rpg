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

const startScreen = (App: Application, loader: Loader): Container => {
    const container = new Container();
    const windowContainer = windowGenerator("fullBlack", 9, 16,loader);
    container.addChild(windowContainer);
    const style = new TextStyle({
        fontFamily: "Minecraft"
    });
    const text = new Text('Hello World', style);
    windowContainer.addChild(text);
    windowContainer.x = App.screen.width / 2 - windowContainer.width / 2;
    windowContainer.y = App.screen.height / 2 - windowContainer.height / 2;  
    return container;
}

export default startScreen;