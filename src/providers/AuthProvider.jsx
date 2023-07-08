import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// firebase auth
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  // Create a new user with email & password
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Sign in registered user using email and password
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //set onAuthStateChanged function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInformation = {
    user,
    createNewUser,
    signInUser,
  };
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
