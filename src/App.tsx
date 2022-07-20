import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Game from './components/game'
import "../static/fonts/Minecraft.ttf";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='minecraft-font'>⚔️ BEATS RPG 🛡️</h1>
      </header>
      <Game />
    </div>
  )
}

export default App
