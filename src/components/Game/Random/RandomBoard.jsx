import Board from '../Board';
import PublishForm from '../PublishForm';

const randomGrid = (cols, rows) => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * 2));
        }
        grid.push(row);
    }
    return grid;
}

export default function RandomBoard() {
    let cols = Math.floor(Math.random() * 30) + 3;
    let rows = cols;
    const initGrid = randomGrid(cols, rows);

    return (
        <>
            <Board initGrid={initGrid} cols={cols} rows={cols} />
            <PublishForm initGrid={initGrid} />
        </>
    )
}