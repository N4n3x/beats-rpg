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
function buttonGenerator(type: string, onTap: () => void, icon: string, loader: Loader): Container {
    const buttonContainer = new Container();

    buttonContainer.interactive = true;
    buttonContainer.on("pointerdown", onTap);
    switch (type) {
        case "small":
            const smallButtonSpritesTopLeft = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x0.png"]);
            const smallButtonSpritesTopRight = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x1.png"]);
            const smallButtonSpritesBotLeft = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x18.png"]);
            const smallButtonSpritesBotRight = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x19.png"]);
            buttonContainer.addChild(smallButtonSpritesTopLeft);
            buttonContainer.addChild(smallButtonSpritesTopRight);
            smallButtonSpritesTopRight.x = smallButtonSpritesTopLeft.width;
            buttonContainer.addChild(smallButtonSpritesBotLeft);
            smallButtonSpritesBotLeft.y = smallButtonSpritesTopLeft.height;
            buttonContainer.addChild(smallButtonSpritesBotRight);
            smallButtonSpritesBotRight.x = smallButtonSpritesBotLeft.width;
            smallButtonSpritesBotRight.y = smallButtonSpritesTopLeft.height;
            break;
        case "wide":
            const wideButtonSpritesTopLeft = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x0.png"]);
            const wideButtonSpritesTopMid = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x5.png"]);
            const wideButtonSpritesTopRight = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x1.png"]);
            const wideButtonSpritesBotLeft = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x18.png"]);
            const wideButtonSpritesBotMid = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x21.png"]);
            const wideButtonSpritesBotRight = new Sprite(loader.resources["button"]!.spritesheet!.textures["buttons_4x19.png"]);
            buttonContainer.addChild(wideButtonSpritesTopLeft);
            buttonContainer.addChild(wideButtonSpritesTopMid);
            wideButtonSpritesTopMid.x = wideButtonSpritesTopLeft.width;
            buttonContainer.addChild(wideButtonSpritesTopRight);
            wideButtonSpritesTopRight.x = wideButtonSpritesTopLeft.width + wideButtonSpritesTopMid.width;
            buttonContainer.addChild(wideButtonSpritesBotLeft);
            wideButtonSpritesBotLeft.y = wideButtonSpritesTopLeft.height;
            buttonContainer.addChild(wideButtonSpritesBotMid);
            wideButtonSpritesBotMid.x = wideButtonSpritesBotLeft.width;
            wideButtonSpritesBotMid.y = wideButtonSpritesTopLeft.height;
            buttonContainer.addChild(wideButtonSpritesBotRight);
            wideButtonSpritesBotRight.x = wideButtonSpritesBotLeft.width + wideButtonSpritesBotMid.width;
            wideButtonSpritesBotRight.y = wideButtonSpritesTopLeft.height;
            break;
    }
    const buttonSpritesIcon = new Sprite(loader.resources["button"]!.spritesheet!.textures[`buttons_4x${icon}.png`]);
    buttonContainer.addChild(buttonSpritesIcon);
    buttonSpritesIcon.x = buttonContainer.width / 2 - buttonSpritesIcon.width / 2;
    buttonSpritesIcon.y = buttonContainer.height / 2 - buttonSpritesIcon.height / 2;
    return buttonContainer;
}

export default buttonGenerator;
