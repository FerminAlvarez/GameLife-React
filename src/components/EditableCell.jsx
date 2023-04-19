export default function EditableCell({ isLive, clickHandler, col, row }) {
    return (
        <div className={`cell ${isLive ? "isLive" : ""}`} onClick={() => clickHandler(row, col)}>

        </div>
    )
}