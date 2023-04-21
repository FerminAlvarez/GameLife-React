import { Link } from "react-router-dom"

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
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="src/assets/profile_image.jpg" />
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link to="profile" class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </Link>
                        </li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}