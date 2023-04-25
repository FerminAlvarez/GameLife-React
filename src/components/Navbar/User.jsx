import { UserAuth } from "../../context/AuthContext"

export default function User() {
    const { user, signInWithGoogle, signOut } = UserAuth();
    return (
        <>
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
                <button className="menu btn btn-ghost" onClick={signInWithGoogle}>Log in with Google</button>}
        </>
    )

}