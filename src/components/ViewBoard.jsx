import { useEffect, useState } from 'react';
import Cell from './Cell';

export default function ViewBoard({ initGrid, title, description, avatar, name, created_at }) {
    let [grid, setGrid] = useState(initGrid);
    let [speed, setSpeed] = useState(750);
    let [instance, setInstance] = useState(0);
    const cols = grid[0].length;
    const rows = cols;

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
        <>
            <div class="flex flex-col	 bg-white shadow-lg rounded-lg mx-auto my-5 mx-72">
                <div class="flex px-4 py-6">
                    <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src={avatar} alt="avatar" />
                    <div className='w-full'>
                        <div class="flex items-center justify-between">
                            <h2 class="text-lg font-semibold text-gray-900 -mt-1">{name} </h2>
                            <small class="text-sm text-gray-700 ">{created_at.split('T')[0]}</small>
                        </div>

                        <h2 class="text-md font-semibold text-gray-900">{title} </h2>
                        <p class="mt-3 text-gray-700 text-sm">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="board items-center flex">

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
            </div>
            
        </>
    );
}