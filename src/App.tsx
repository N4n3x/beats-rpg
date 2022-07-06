import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Game from './components/game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>⚔️ BEATS RPG 🛡️</h1>
      </header>
      <Game />
    </div>
  )
}

export default App
