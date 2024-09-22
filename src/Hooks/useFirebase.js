import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const [user,setUser] = useState();
  const [loading,setLoading] = useState(true);

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  };


  const createUser = (email, password) => {
    setLoading(true)
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
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  
  }

  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setLoading(false)
      if (user) {
       setUser(user)
      } else {
        setUser()
      }
    });
    return () => unsubscribed;
  },[])
  return {
    googleSignIn,user,createUser,setUser,setUserName,userSignIn,logOut,loading

};
};

export default useFirebase;
