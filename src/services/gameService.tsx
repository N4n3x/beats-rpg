import { Application, Sprite, settings, SCALE_MODES, Graphics, Container, Spritesheet, BaseTexture, Loader, LoaderResource, Texture } from 'pixi.js'
// import * as jsonButtonSpritesheet from '../../static/assets/buttons_4x.json'

const App = new Application({
    width: 360,
    height: 640,
    antialias: true,
    resolution: 1,
});
settings.SCALE_MODE = SCALE_MODES.NEAREST;
App.loader.add("button", "../../static/assets/buttons_4x.json");
App.loader.load(setup);

function setup(loader: Loader, resources: Object){
    console.log("setup", loader, resources);
    // const buttonTextures = Texture.from(loader.resources["button"]!.spritesheet!.textures["buttons_4x0.png"]);
    const buttonSpritesTopLeft = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x0.png"]);
    const buttonSpritesTopRight = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x1.png"]);
    const buttonSpritesBotLeft = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x18.png"]);
    const buttonSpritesBotRight = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x19.png"]);
    const buttonSpritesIcon = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x14.png"]);

    const headerContainer = new Container();
    App.stage.addChild(headerContainer);

    headerContainer.x = 0;
    headerContainer.y = 0;
    
    headerContainer.width = App.screen.width;
    headerContainer.height = 60;

    const headerBackground = new Graphics();
    headerContainer.addChild(headerBackground);
    headerBackground.beginFill(0xDE3249);
    headerBackground.drawRect(0, 0, headerContainer.width, headerContainer.height);
    headerBackground.endFill();

    const buttonContainer = new Container();
    headerContainer.addChild(buttonContainer);
    buttonContainer.x = headerContainer.x + 10;
    buttonContainer.y = headerContainer.y + 10;

    buttonContainer.addChild(buttonSpritesTopLeft);
    buttonContainer.addChild(buttonSpritesTopRight);
    buttonSpritesTopRight.x = buttonSpritesTopLeft.width;
    buttonContainer.addChild(buttonSpritesBotLeft);
    buttonSpritesBotLeft.y = buttonSpritesTopLeft.height;
    buttonContainer.addChild(buttonSpritesBotRight);
    buttonSpritesBotRight.x = buttonSpritesTopLeft.width;
    buttonSpritesBotRight.y = buttonSpritesTopLeft.height;
    buttonContainer.addChild(buttonSpritesIcon);
    buttonSpritesIcon.x = buttonSpritesTopLeft.width / 2;
    buttonSpritesIcon.y = buttonSpritesTopLeft.height / 2;
}

export default App;