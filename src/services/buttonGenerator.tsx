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
  TextureGCSystem,
} from "pixi.js";

let buttonTopLeft: Sprite;
let buttonTopMid: Sprite;
let buttonTopRight: Sprite;
let buttonBotLeft: Sprite;
let buttonBotMid: Sprite;
let buttonBotRight: Sprite;
let textureTopLeft: Texture;
let textureTopMid: Texture;
let textureTopRight: Texture;
let textureBotLeft: Texture;
let textureBotMid: Texture;
let textureBotRight: Texture;
let textureDownBotLeft: Texture;
let textureDownBotMid: Texture;
let textureDownBotRight: Texture;
let botSpriteButton: Array<Sprite> = [];

// 
function buttonGenerator(
  type: string,
  width: number,
  content: Container,
  action: () => void,
  loader: Loader
): Container {
  const buttonContainer = new Container();
  buttonContainer.interactive = true;
  buttonContainer.buttonMode = true;
  buttonContainer.on("pointerdown", action);
  buttonContainer.on("pointerdown", buttonDown);
  buttonContainer.on("pointerup", buttonUp);
  if (width === undefined || width < 2) {
    return buttonContainer;
  }
  loadTexture(loader, type);
  buttonTopLeft = new Sprite(textureTopLeft);
  buttonTopMid = new Sprite(textureTopMid);
  buttonTopRight = new Sprite(textureTopRight);
  buttonBotLeft = new Sprite(textureBotLeft);
  buttonBotMid = new Sprite(textureBotMid);
  buttonBotRight = new Sprite(textureBotRight);

  for (let j = 0; j < width; j++) {
    if (j === 0) {
      buttonTopLeft.x = j * buttonTopLeft.width;
      buttonTopLeft.y = 0;
      buttonContainer.addChild(buttonTopLeft);
      buttonBotLeft.x = j * buttonBotLeft.width;
      buttonBotLeft.y = buttonTopLeft.height;
      buttonContainer.addChild(buttonBotLeft);
    } else if (j === width - 1) {
      buttonTopRight.x = j * buttonTopRight.width;
      buttonTopRight.y = 0;
      buttonContainer.addChild(buttonTopRight);
      buttonBotRight.x = j * buttonBotRight.width;
      buttonBotRight.y = buttonTopRight.height;
      buttonContainer.addChild(buttonBotRight);
    } else {
      let tempButtonTopMid = new Sprite(buttonTopMid.texture);
      tempButtonTopMid.x = j * tempButtonTopMid.width;
      tempButtonTopMid.y = 0;
      buttonContainer.addChild(tempButtonTopMid);
      let tempButtonBotMid = new Sprite(buttonBotMid.texture);
      tempButtonBotMid.x = j * tempButtonBotMid.width;
      tempButtonBotMid.y = tempButtonTopMid.height;
      buttonContainer.addChild(tempButtonBotMid);
      botSpriteButton.push(tempButtonBotMid);
    }
  }
  buttonContainer.addChild(content);
  content.x = buttonContainer.width / 2 - content.width / 2;
  content.y = buttonContainer.height / 2 - content.height / 2;
  return buttonContainer;
}

function buttonDown() {
  console.log("button down");
  buttonBotLeft.texture = textureDownBotLeft;
  for(let s of botSpriteButton){
    s.texture = textureDownBotMid;
  }
  buttonBotRight.texture = textureDownBotRight;
}

function buttonUp(){
  console.log("button up");
  buttonBotLeft.texture = textureBotLeft;
  for(let s of botSpriteButton){
    s.texture = textureBotMid;
  }
  buttonBotRight.texture = textureBotRight;
}

function loadTexture(loader: Loader, type: string = "normal"): void{
  switch (type) {
    case "black":
      buttonTopLeft = new Sprite(
        loader.resources["fullBlackWindow"]!.spritesheet!.textures[
          "fullBlackWindow_topLeft"
        ]
      );
      buttonTopMid = new Sprite(
        loader.resources["fullBlackWindow"]!.spritesheet!.textures[
          "fullBlackWindow_topMid"
        ]
      );
      buttonTopRight = new Sprite(
        loader.resources["fullBlackWindow"]!.spritesheet!.textures[
          "fullBlackWindow_topRight"
        ]
      );
      buttonBotLeft = new Sprite(
        loader.resources["fullBlackWindow"]!.spritesheet!.textures[
          "fullBlackWindow_botLeft"
        ]
      );
      buttonBotMid = new Sprite(
        loader.resources["fullBlackWindow"]!.spritesheet!.textures[
          "fullBlackWindow_botMid"
        ]
      );
      buttonBotRight = new Sprite(
        loader.resources["fullBlackWindow"]!.spritesheet!.textures[
          "fullBlackWindow_botRight"
        ]
      );
      break;
    default:
      textureTopLeft = loader.resources["button"]!.spritesheet!.textures[
        "buttons_4x0.png"
      ];
      textureTopMid = loader.resources["button"]!.spritesheet!.textures[
        "buttons_4x5.png"
      ];
      textureTopRight = loader.resources["button"]!.spritesheet!.textures[
        "buttons_4x1.png"
      ];
      textureBotLeft = loader.resources["button"]!.spritesheet!.textures[
        "buttons_4x20.png"
      ];
      textureBotMid = loader.resources["button"]!.spritesheet!.textures[
        "buttons_4x21.png"
      ];
      textureBotRight = loader.resources["button"]!.spritesheet!.textures[
        "buttons_4x22.png"
      ];
      textureDownBotLeft = loader.resources["button"]!.spritesheet!.textures[
        "buttons_4x23.png"
      ];
      textureDownBotMid = loader.resources["button"]!.spritesheet!.textures[
        "buttons_4x24.png"
      ];
      textureDownBotRight = loader.resources["button"]!.spritesheet!.textures[
        "buttons_4x25.png"
      ];
  }
}

export default buttonGenerator;
