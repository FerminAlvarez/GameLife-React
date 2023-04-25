import Board from '../Board';
import PublishForm from '../PublishForm';

const MIN_COLS = 3;
const MAX_COLS = 30;
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
    const cols = Math.floor(Math.random() * (MAX_COLS - MIN_COLS + 1)) + MIN_COLS;
    const rows = cols;
    let initGrid = randomGrid(cols, rows);

    return (
        <>
            <Board initGrid={initGrid} cols={cols} rows={cols} />
            <PublishForm initGrid={initGrid} />
        </>
    )
}