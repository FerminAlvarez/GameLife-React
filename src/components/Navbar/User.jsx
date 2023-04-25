import { userAuth } from "../../context/AuthContext"

export default function User() {
    const { user, signInWithGoogle, signOut } = userAuth();
    return (
        <>
            {user &&
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.user_metadata.avatar_url} />
                        </div>
                    </label>
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li key="logout"><button onClick={signOut}>Logout</button></li>
                    </ul>
                </div>
            }
            {!user &&
                <button className="menu btn btn-ghost" onClick={signInWithGoogle}>Log in with Google</button>
            }
        </>
    )

}