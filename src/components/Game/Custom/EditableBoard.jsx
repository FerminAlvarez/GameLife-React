import { useState } from 'react';
import EditableCell from '../EditableCell'

export default function ({ cols, rows, handleClick }) {
    const [grid, setGrid] = useState(Array(rows).fill(0).map(() => Array(cols).fill(0)))

    function toggleCell(row, col) {
        let cell = grid[row][col]
        return 1 - cell
    }

    function updateBoard(row, col) {
        let newGrid = grid.slice()
        newGrid[row][col] = toggleCell(row, col)
        setGrid(newGrid)
    }

    return (
        <div className="board items-center">
            {grid &&
                grid.map((rows, i) => (
                    <div key={i} className='row'>
                        {rows.map((col, j) => (
                            <EditableCell key={`${i}${j}`} isLive={grid[i][j] == true} clickHandler={updateBoard} row={i} col={j} />
                        ))}
                    </div>
                ))
            }
            <button className="btn btn-primary m-5" onClick={() => handleClick(grid)}>START</button>
        </div>
    );
}
