import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { useEffect } from 'react';


export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const signIn = (email ,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email ,password)
            
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn
       
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;