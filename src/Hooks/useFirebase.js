import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const [user,setUser] = useState()

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user)
    });
  };

  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
       setUser(user)
      } else {
        setUser()
      }
    });
    return unsubscribed;
  },[])
  return [
    googleSignIn,user

  ];
};

export default useFirebase;
