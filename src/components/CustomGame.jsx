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
                <div>
                    <h2 className='font-bold text-2xl'>Board Settings</h2>
                    <div className='flex justify-center flex-col'>
                        <div className='my-5'>
                            <h4>Columns</h4>
                            <input min="3" value={cols} onChange={e => setCols(+e.target.value)} className="input input-bordered w-full max-w-xs mx-5" />
                        </div>
                        <div>
                            <h4>Rows</h4>
                            <input min="3" value={cols} disabled className="input input-bordered w-full max-w-xs mx-5" />
                        </div>
                    </div>
                    <button class="btn btn-secondary mt-5 w-72 " onClick={() => setCreate(true)}> {!create ? "CREATE" : ""} </button>
                </div>
            }
            {
                create &&
                <div>
                    <h5>You can click in a cell to toggle</h5>
                    <EditableBoard cols={cols} rows={cols} handleClick={start} />
                </div>

            }
            {
                play &&
                <div>
                    <Board initGrid={grid} cols={cols} rows={cols} />
                </div>
            }
        </>
    )
}