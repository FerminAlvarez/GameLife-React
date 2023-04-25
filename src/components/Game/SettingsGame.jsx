import { useState } from 'react'
import RandomBoard from '../Game/Random/RandomBoard'
import CustomGame from '../Game/CustomGame'

const GAME_TYPE_CUSTOM = "CUSTOM"
const GAME_TYPE_RANDOM = "RANDOM"
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
                        <button className="btn btn-primary m-5" onClick={() => { setGameType(GAME_TYPE_CUSTOM); setIsPlaying(true) }}>Custom Board</button>
                        <button className="btn btn-primary m-5" onClick={() => { setGameType(GAME_TYPE_RANDOM); setBoardID(boardID + 1); setIsPlaying(true) }}>Random Board</button>
                    </div>
                }

                {isPlaying &&
                    <button className="btn btn-primary m-5" onClick={() => { setIsPlaying(false); setGameType(null); }}>Back</button>
                }
            
                {gameType == GAME_TYPE_RANDOM &&
                    <>
                        <button className="btn btn-primary m-5" onClick={() => { setGameType(GAME_TYPE_RANDOM); setBoardID(boardID + 1); setIsPlaying(true) }}>Random Board</button>
                        <RandomBoard key={boardID} />
                    </>

                }
                {isPlaying && gameType == GAME_TYPE_CUSTOM &&
                    <CustomGame />
                }

            </div>
        </>
    )
}