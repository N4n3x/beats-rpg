import { Application, Sprite } from 'pixi.js'
import React, { useRef, useEffect, useLayoutEffect, RefObject } from "react";

const app = new Application({
    width: 360,
    height: 640,
    antialias: true,
    resolution: 1,
    view: document.getElementById('pixi-canvas') as HTMLCanvasElement,
});

function Game() {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        // On first render add app to DOM
        // if (ref.current !== null) {
        //     ref.current.appendChild(app.view);
        // }
        ref.current!.appendChild(app.view);
        // Start the PixiJS app
        app.start();
    
        return () => {
          // On unload stop the application
          app.stop();
        };
      }, []);

    
    const sprite: Sprite = Sprite.from('../../static/hat-guy.png');
    sprite.anchor.set(0.5);
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;
    app.stage.addChild(sprite);
  return <div ref={ref}/>;
}

export default Game;