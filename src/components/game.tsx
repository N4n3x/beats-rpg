import App from '../services/gameService';
import React, { useRef, useLayoutEffect } from "react";

function Game() {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        // On first render add app to DOM
        // if (ref.current !== null) {
        //     ref.current.appendChild(app.view);
        // }
        ref.current!.appendChild(App.view);
        
        // Start the PixiJS app
        App.start();
    
        return () => {
          // On unload stop the application
          App.stop();
        };
      }, []);
  return <div ref={ref}/>;
}

export default Game;