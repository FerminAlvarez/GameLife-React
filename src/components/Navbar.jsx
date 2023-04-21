import { Link } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

export default function Navbar() {
    const { user, signInWithGoogle, signOut } = UserAuth();
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
                {user ?
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src={user.user_metadata.avatar_url} />
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <button onClick={signOut}>Logout</button>
                        </ul>
                    </div>
                    :
                    <button className="menu btn btn-ghost" onClick={signInWithGoogle}>Log in with Google</button>
                }


            </div>
        </header>
    )
}