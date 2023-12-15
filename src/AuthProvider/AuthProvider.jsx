import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import app from "../firebase/firebase.confiq";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }


  // On Auth state change

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email
      const loggedUser = {email: userEmail}
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
    
      if(currentUser){
        axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
        .then(res => {
          console.log(res.data);
        })
      }
      else {
        axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
        .then(res => {
          console.log(res.data);
        })
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
