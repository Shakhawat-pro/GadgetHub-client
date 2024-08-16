import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const authContext = createContext()

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider

    const signInWithGoogle = () =>{
        // return signInWithRedirect(auth, googleProvider)
        return signInWithPopup(auth, googleProvider)
    }    

    const authInfo = {
        signInWithGoogle
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;