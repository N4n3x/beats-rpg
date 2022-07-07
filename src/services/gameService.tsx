import { Application, Sprite, settings, SCALE_MODES, Graphics, Container } from 'pixi.js'

const App = new Application({
    width: 360,
    height: 640,
    antialias: true,
    resolution: 1,
});
settings.SCALE_MODE = SCALE_MODES.NEAREST;

initHeader();

function initHeader() {
    const headerContainer = new Container();
    App.stage.addChild(headerContainer);

    headerContainer.x = 0;
    headerContainer.y = 0;
    
    headerContainer.width = App.screen.width;
    headerContainer.height = 60;

    const headerBackground = new Graphics();
    headerContainer.addChild(headerBackground);
    headerBackground.beginFill(0xDE3249);
    headerBackground.drawRect(0, 0, App.screen.width, 60);
    headerBackground.endFill();
    
}
// const sprite: Sprite = Sprite.from('../../static/hat-guy.png');
// sprite.anchor.set(0.5);
// sprite.x = App.screen.width / 2;
// sprite.y = App.screen.height / 2;
// App.stage.addChild(sprite);

export default App;