import { useState } from 'react'
import Board from './Board'
import EditableBoard from './EditableBoard'
export default function CustomGame() {
    const [cols, setCols] = useState(3)
    const [rows, setRows] = useState(3)
    const [grid, setGrid] = useState();
    const [create, setCreate] = useState(false)
    const [play, setPlay] = useState(false)

    function start(grid) {
        setCreate(false)
        setPlay(true)
        setGrid(grid)
    }

    return (
        <>
            {!create && !play &&
                <div className="card">
                    <h2>Board Settings</h2>
                    <div>
                        <h4>Columns:</h4>
                        <input min="3" value={cols} onChange={e => setCols(+e.target.value)} />
                        <h4>Rows:</h4>
                        <input min="3" value={rows} onChange={e => setRows(+e.target.value)} />
                    </div>
                    <button onClick={() => setCreate(true)}> {!create ? "CREATE" : ""} </button>
                </div>
            }
            {
                create &&
                <div>
                    <EditableBoard cols={cols} rows={rows} handleClick={start} />
                </div>

            }
            {
                play &&
                <div>
                    <Board initGrid={grid} cols={cols} rows={rows} />
                </div>
            }
        </>
    )
}