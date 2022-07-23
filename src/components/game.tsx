// import App from "../services/gameService";
import React, { useRef, useLayoutEffect, useEffect } from "react";
import GameService from "../services/gameService";

const App = new GameService({
  width: 360,
  height: 640,
  antialias: true,
  resolution: 1,
});
App.loader
  .add("button", "../../static/assets/buttons_4x.json")
  .add("fullBlackWindow", "../../static/assets/GUI_4x.json")
  .load(start);

function start(): void {
  App.router("startScreen");
}

function Game() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current!.appendChild(App.view);


    // On first render add app to DOM
    // if (ref.current !== null) {
    //     ref.current.appendChild(app.view);
    // }

    // Start the PixiJS app
    App.start();

    return () => {
      ref.current!.removeChild(App.view);
      // On unload stop the application
      App.stop();
    };
  }, []);
  return <div ref={ref} />;
}

export default Game;
