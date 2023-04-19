import { useState } from 'react';
import EditableCell from './EditableCell';


export default function ({ cols, rows, handleClick }) {
    let [grid, setGrid] = useState(Array(rows).fill(0).map(() => Array(cols).fill(0)))

    function toggleCell(row, col) {
        return 1 - grid[row][col]
    }

    function updateBoard(row, col) {
        let newGrid = grid.slice()
        newGrid[row][col] = toggleCell(row, col)
        setGrid(newGrid)
    }

    return (
        <div>
            <div className="board items-center">
                {grid &&
                    grid.map((rows, i) => (
                        <div className='row'>
                            {rows.map((col, j) => (
                                <EditableCell key={`${i}${j}`} isLive={grid[i][j] ? true : false} clickHandler={updateBoard} row={i} col={j} />
                            ))}
                        </div>
                    ))
                }
            </div>
            <button class="btn btn-primary m-5" onClick={() => handleClick(grid)}>START</button>
        </div>
    );
}
