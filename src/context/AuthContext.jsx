import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    async function signInWithGoogle() {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google'
            }).then((a) => {
                console.log(a)
            })
            if (error) throw new Error("Error in sign in")
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) throw new Error("Error in sign out")
    }

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (session === null) {
                setUser(null)
            }
            if (session != null) {
                setUser(session?.user)
                console.log(session?.user)
            }

            return () => {
                authListener.subscription
            }
        })
    }, [])


    return (
        <AuthContext.Provider value={{ signInWithGoogle, signOut, user }}>
            {children}
        </AuthContext.Provider>
    )

};

export function UserAuth() {
    return useContext(AuthContext)
}