import { useState } from 'react'
import RandomBoard from './RandomBoard'
import CustomGame from './CustomGame'

export default function SettingsGame() {
    let [gameType, setGameType] = useState(null)
    let [boardID, setBoardID] = useState(0)
    let [isPlaying, setIsPlaying] = useState(false)

    return (
        <>
            <div className='text-center'>
                {!isPlaying &&
                    <div>
                        <h3>Pick an option</h3>
                        <button class="btn btn-primary m-5" onClick={() => { setGameType("Custom"); setIsPlaying(true) }}>Custom Board</button>
                        <button class="btn btn-primary m-5" onClick={() => { setGameType("Random"); setBoardID(boardID + 1); setIsPlaying(true) }}>Random Board</button>
                    </div>
                }

                {isPlaying &&
                    <button class="btn btn-primary m-5" onClick={() => { setIsPlaying(false); setGameType(null); }}>Back</button>
                }

                {gameType == "Random" &&
                    <>
                        <button class="btn btn-primary m-5" onClick={() => { setGameType("Random"); setBoardID(boardID + 1); setIsPlaying(true) }}>Random Board</button>
                        <RandomBoard key={boardID} />
                    </>

                }
                {isPlaying && gameType == "Custom" &&
                    <CustomGame />
                }

            </div>
        </>
    )
}