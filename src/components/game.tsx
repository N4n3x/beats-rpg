// import App from "../services/gameService";
import React, { useRef, useLayoutEffect, useEffect } from "react";
import GameService from "../services/gameService";

const App = GameService.getInstance();
App.loader
  .add("button", `../..${import.meta.env.BASE_URL}assets/buttons_4x.json`)
  .add("gui", `../..${import.meta.env.BASE_URL}assets/GUI_4x.json`)
  .load(start);

function start(): void {
  console.log(import.meta.env);
  
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
