import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxios from "../hooks/useAxios";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const axios = useAxios();

    const [user,setUser] = useState();
    const [isLoading,setIsLoading] = useState(true);


    const register = (email,pass) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass);
    }

    const updateUser = (name,url) =>{
        setIsLoading(true)
        return updateProfile(auth.currentUser,{
            displayName : name,
            photoURL : url,
        })

    }

    const signIn = (email,pass) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const logOut = () =>{
        setIsLoading(true)
        return signOut(auth);
    }

    const provider = new GoogleAuthProvider();
    const googleLogin = () =>{
        return signInWithPopup(auth,provider);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email : userEmail}
            setUser(currentUser);
            setIsLoading(false);

            if(loggedUser){

                axios.post("/jwt", loggedUser)
                .then(res=>{
                    console.log(res.data);
                })
            }
            else{
                axios.post("/logout",loggedUser)
                .then(res=>{

                    console.log(res.data);
                })
            }
        })

        return () =>{
            return unSubscribe();
        }
    })
    const authInfo = {
        user,
        register,
        signIn,
        logOut,
        updateUser,
        googleLogin,
        isLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;