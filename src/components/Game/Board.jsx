import { useEffect, useState } from 'react';
import Cell from './Cell';
import PublishForm from './PublishForm'

export default function Board({ initGrid, cols, rows }) {
    const backupGrid = initGrid;
    let [grid, setGrid] = useState(initGrid);
    let [speed, setSpeed] = useState(750);
    let [instance, setInstance] = useState(0);

    const setCellValueHelper = (row, col) => {
        try {
            return grid[row][col];
        }
        catch (e) {
            return 0;
        }
    };

    const countNeighbours = (row, col) => {
        let total_neighbours = 0;
        total_neighbours += setCellValueHelper(row - 1, col - 1);
        total_neighbours += setCellValueHelper(row - 1, col);
        total_neighbours += setCellValueHelper(row - 1, col + 1);
        total_neighbours += setCellValueHelper(row, col - 1);
        total_neighbours += setCellValueHelper(row, col + 1);
        total_neighbours += setCellValueHelper(row + 1, col - 1);
        total_neighbours += setCellValueHelper(row + 1, col);
        total_neighbours += setCellValueHelper(row + 1, col + 1);
        return total_neighbours;
    };

    const updateCellValue = (row, col) => {
        const total = countNeighbours(row, col);

        // cell with more than 4 or less then 3 neighbours dies. 1 => 0; 0 => 0
        if (total > 4 || total < 3) {
            return 0;
        }

        // dead cell with 3 neighbours becomes alive. 0 => 1
        else if (grid[row][col] === 0 && total === 3) {
            return 1;
        }

        // or returning its status back. 0 => 0; 1 => 1
        else {
            return grid[row][col];
        }
    }

    const updateLifeCycle = () => {
        let newGrid = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                let new_state = updateCellValue(i, j);
                row.push(new_state);
            }
            newGrid.push(row);
        };
        setGrid(newGrid);
        setInstance(instance + 1);
        return newGrid;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateLifeCycle();
        }, speed);
        return () => clearInterval(interval);

    }, [grid]);

    return (
        <div className="board items-center">
            {grid &&
                grid.map((rows, i) => (
                    <div className='row'>
                        {rows.map((col, j) => (
                            <Cell key={`${i}${j}`} isLive={grid[i][j] ? true : false} />
                        ))}
                    </div>
                ))
            }
            <h1> Generation : {instance} </h1>
            <div>
                <button class="btn btn-primary m-5" onClick={() => setSpeed(speed + speed * 0.1)}>Slower</button>
                <button class="btn btn-primary m-5" onClick={() => { speed >= 10 ? setSpeed(speed - speed * 0.1) : "" }}>Faster</button>
            </div>
        </div>
    );
}