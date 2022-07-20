import { Application, Sprite, settings, SCALE_MODES, Graphics, Container, Spritesheet, BaseTexture, Loader, LoaderResource, Texture } from 'pixi.js'
import buttonGenerator from './buttonGenerator';
import windowGenerator from './windowGenerator';
// import * as jsonButtonSpritesheet from '../../static/assets/buttons_4x.json'

const App = new Application({
    width: 360,
    height: 640,
    antialias: true,
    resolution: 1,
});
settings.SCALE_MODE = SCALE_MODES.NEAREST;
App.loader.add("button", "../../static/assets/buttons_4x.json").add("fullBlackWindow", "../../static/assets/GUI_4x.json");
// App.loader.add("fullBlackWindow", "../../static/assets/GUI_4x.json");
App.loader.load(setup);

function setup(loader: Loader){
    const headerContainer = new Container();
    App.stage.addChild(headerContainer);
    
    const windowContainer = windowGenerator("fullBlack", 9, 16,loader);
    headerContainer.addChild(windowContainer);
    windowContainer.x = App.screen.width / 2 - windowContainer.width / 2;
    windowContainer.y = 70;
    

    const buttonContainer = buttonGenerator("small", menuAction, "14", loader);
    headerContainer.addChild(buttonContainer);
    buttonContainer.x = headerContainer.x + 1;
    buttonContainer.y = headerContainer.y + 1;
}

function menuAction(): void{
    console.log("menuAction");
}

export default App;