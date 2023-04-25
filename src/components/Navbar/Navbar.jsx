import { Link } from "react-router-dom"
import { UserAuth } from "../../context/AuthContext"
import User from "./User";

export default function Navbar() {
    return (
        <header className="navbar bg-base-100">
            <div className="flex-1">

                <li className="btn btn-ghost normal-case text-xl">
                    <Link to="/">Conway's Game of Life</Link>
                </li>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/play">Play</Link></li>
                    <li><Link to="/explore">Explore</Link></li>
                </ul>
                <User />
            </div>
        </header>
    )
}