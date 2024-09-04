import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../firebase.config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?._id || user?.email
            const loggedUser = { user_id: userEmail }
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => console.log(res.data))
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
                    .then((res => console.log(res.data)))
            }
        });
        return unsubscribe;
    }, [auth])
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signInEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const gitHubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }
    const logout = () => {
        setLoading(true)
        localStorage.removeItem('isAuth')
        return signOut(auth)
    }
    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    const authValues = { createNewUser, signInEmail, googleSignUp, gitHubSignIn, user, logout, updateUserProfile }
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;