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
    Texture
} from "pixi.js";

// icon 10, 11, 12, 13, 14, 15, 28, 29, 30, 31
function windowGenerator(type: string, width: number, height: number,loader: Loader): Container {
    const windowContainer = new Container();
    let windowTopLeft:  Sprite;
    let windowTopMid:   Sprite;
    let windowTopRight: Sprite;
    let windowMidLeft:  Sprite;
    let windowMidMid:   Sprite;
    let windowMidRight: Sprite;
    let windowBotLeft:  Sprite;
    let windowBotMid:   Sprite;
    let windowBotRight: Sprite;
    if(width === undefined || height === undefined || width < 2 || height < 2){
        return windowContainer;
    }

    switch (type) {
        case "fullBlack":
            windowTopLeft = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_topLeft"]);
            windowTopMid = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_topMid"]);
            windowTopRight = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_topRight"]);
            windowMidLeft = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_midLeft"]);
            windowMidMid = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_midMid"]);
            windowMidRight = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_midRight"]);
            windowBotLeft = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_botLeft"]);
            windowBotMid = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_botMid"]);
            windowBotRight = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_botRight"]);
            break;
        case "black":
            windowTopLeft = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_topLeft"]);
            windowTopMid = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_topMid"]);
            windowTopRight = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_topRight"]);
            windowMidLeft = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_midLeft"]);
            windowMidMid = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_midMid"]);
            windowMidRight = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_midRight"]);
            windowBotLeft = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_botLeft"]);
            windowBotMid = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_botMid"]);
            windowBotRight = new Sprite(loader.resources["fullBlackWindow"]!.spritesheet!.textures["fullBlackWindow_botRight"]);
            break;
        default:
            return windowContainer;
    }
    
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {          
            if(i === 0 && j === 0){
                windowTopLeft.x = j * windowTopLeft.width;
                windowTopLeft.y = i * windowTopLeft.height;
                windowContainer.addChild(windowTopLeft);
            }
            else if(i === 0 && j === width-1){
                windowTopRight.x = j * windowTopRight.width;
                windowTopRight.y = i * windowTopRight.height;
                windowContainer.addChild(windowTopRight);
            }
            else if(i === height-1 && j === 0){
                windowBotLeft.x = j * windowBotLeft.width;
                windowBotLeft.y = i * windowBotLeft.height;
                windowContainer.addChild(windowBotLeft);
            }
            else if(i === height-1 && j === width-1){
                windowBotRight.x = j * windowBotRight.width;
                windowBotRight.y = i * windowBotRight.height;
                windowContainer.addChild(windowBotRight);
            }
            else if(i === 0){
                let tempWindowTopMid = new Sprite(windowTopMid.texture);
                tempWindowTopMid.x = j * windowTopMid.width;
                tempWindowTopMid.y = i * windowTopMid.height;
                windowContainer.addChild(tempWindowTopMid);
            }
            else if(i === height-1){
                let tempWindowBotMid = new Sprite(windowBotMid.texture);
                tempWindowBotMid.x = j * windowBotMid.width;
                tempWindowBotMid.y = i * windowBotMid.height;
                windowContainer.addChild(tempWindowBotMid);
            }
            else if(j === 0){
                let tempWindowMidLeft = new Sprite(windowMidLeft.texture);
                tempWindowMidLeft.y = i * windowMidLeft.height;
                tempWindowMidLeft.x = j * windowMidLeft.width;
                windowContainer.addChild(tempWindowMidLeft);
            }
            else if(j === width-1){
                let tempWindowMidRight = new Sprite(windowMidRight.texture);
                tempWindowMidRight.y = i * windowMidRight.height;
                tempWindowMidRight.x = j * windowMidRight.width;
                windowContainer.addChild(tempWindowMidRight);
            }
            else{
                let tempWindowMidMid = new Sprite(windowMidMid.texture);
                tempWindowMidMid.x = j * windowMidMid.width;
                tempWindowMidMid.y = i * windowMidMid.height;
                windowContainer.addChild(tempWindowMidMid);
            }
            
        }   
    }

    // windowContainer.addChild(windowTopLeft);
    // windowContainer.addChild(windowTopMid);
    // windowTopMid.x = windowTopLeft.width;
    // windowContainer.addChild(windowTopRight);
    // windowTopRight.x = windowTopLeft.width + windowTopMid.width;

    return windowContainer;
}

export default windowGenerator;
