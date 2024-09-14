import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const [user,setUser] = useState()

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
  };


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const setUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {
      // Profile updated!
      // ...
    })
  }

  const userSignIn = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
  
  }

  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
       setUser(user)
      } else {
        setUser()
      }
    });
    return () => unsubscribed;
  },[])
  return {
    googleSignIn,user,createUser,setUser,setUserName,userSignIn

};
};

export default useFirebase;
