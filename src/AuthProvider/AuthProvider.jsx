import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleUserLogOut = () => {
    return signOut(auth)
      .then(() => {
        console.log("user logged out");
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
      .then(res => {
        console.log(res.user);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      // console.log("user in the on state", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authentication = {
    user,
    loading,
    createUser,
    userLogin,
    profileUpdate,
    googleLogin,
    handleUserLogOut,
  };
  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
