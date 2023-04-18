import { useState } from 'react'
import Board from './components/Board'
import './App.css'

function App() {
  const [cols, setCols] = useState(3)
  const [rows, setRows] = useState(3)
  const [speed, setSpeed] = useState(200)
  const [play, setPlay] = useState(false)

  return (
    <div className="App">
      <h1>Game Life</h1>
      {!play &&
        <div className="card">
          <h2>Board Settings</h2>
          <div>
            <h4>Columns:</h4>
            <input min="3" value={cols} onChange={e => setCols(e.target.value)} />
            <h4>Rows:</h4>
            <input min="3" value={rows} onChange={e => setRows(e.target.value)} />

          </div>
        </div>
      }
      <button onClick={() => setPlay(!play)}> {!play ? "START" : "STOP"} </button>
      {play &&
        <div>
          <h4>Delay: {speed}</h4>
          <input type="range" min="200" max="10000" value={speed} onChange={e => setSpeed(e.target.value)} />
          <Board cols={cols} rows={rows} speed={speed} />
        </div>

      }
    </div>
  )
}

export default App
