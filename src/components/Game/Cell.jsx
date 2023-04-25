export default function Cell({isLive}) {
    return (
        <div className={`cell ${isLive ? "isLive" : ""}`}>

        </div>
    )
}