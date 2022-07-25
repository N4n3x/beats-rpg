import { Application, IApplicationOptions, Sprite, settings, SCALE_MODES, Graphics, Container, Spritesheet, BaseTexture, Loader, LoaderResource, Texture } from 'pixi.js'
import StartScreen from './startScreen';
import BattleScreen from './battleScreen';

const TICK_INTERVAL = 240;
interface IGameService extends Application {
    router: (screen: string) => void;
}
class GameService extends Application {
    public tickInterval: number;
    constructor(options: IApplicationOptions) {
        super(options);
        this.tickInterval = TICK_INTERVAL;
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

export default GameService;