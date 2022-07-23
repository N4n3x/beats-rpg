import { Application, IApplicationOptions, Sprite, settings, SCALE_MODES, Graphics, Container, Spritesheet, BaseTexture, Loader, LoaderResource, Texture } from 'pixi.js'
import StartScreen from './startScreen';
import BattleScreen from './battleScreen';

interface IGameService extends Application {
    router: (screen: string) => void;
}
class GameService extends Application {
    constructor(options: IApplicationOptions) {
        super(options);
    }
    
    public router(screenName: string): void{
        this.stage.removeChildren();
        switch(screenName){
            case "startScreen":
                const startScreenContainer = StartScreen(this);
                this.stage.addChild(startScreenContainer);
                break;
            case "battleScreen":
                const battleScreenContainer = BattleScreen(this);
                this.stage.addChild(battleScreenContainer);
                break;
        }
    }
}

// const App = new GameService({
//     width: 360,
//     height: 640,
//     antialias: true,
//     resolution: 1,
// });
// // settings.SCALE_MODE = SCALE_MODES.NEAREST;
// App.loader.add("button", "../../static/assets/buttons_4x.json")
//     .add("fullBlackWindow", "../../static/assets/GUI_4x.json")
//     .load(start);

// function start(): void{ 
//     App.router("startScreen");
// }

export default GameService;