import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signOut, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider,  } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../Componenet/hooks/useAxiosPublic";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider )
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email,password);
    }

    const LogOut = () =>{ 
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile = (name,photo) =>{
         return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
             
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        LogOut,
        updateUserProfile,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;