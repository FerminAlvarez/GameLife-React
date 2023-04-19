import { useState } from 'react'
import RandomBoard from './RandomBoard'
import CustomGame from './CustomGame'

export default function SettingsGame() {
    let [gameType, setGameType] = useState(null)
    let [boardID, setBoardID] = useState(0)

    return (
        <>
            <div className='text-center'>
                <h3>Pick an option</h3>
                <button class="btn btn-primary m-5" onClick={() => setGameType("Custom")}>Custom Board</button>
                <button class="btn btn-primary m-5" onClick={() => { setGameType("Random"); setBoardID(boardID + 1) }}>Random Board</button>
                {gameType == "Random" &&
                    <RandomBoard key={boardID} />
                }
                {gameType == "Custom" &&
                    <CustomGame />
                }

            </div>
        </>
    )
}