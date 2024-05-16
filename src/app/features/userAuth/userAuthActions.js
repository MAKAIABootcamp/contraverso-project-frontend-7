import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase/firebaseConfig";
import { login, logout } from "./userAuthSlice";
import { signOut } from "firebase/auth";

import { setError } from "./userAuthSlice";

export const actionLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Inicio de sesión exitoso:", user.displayName);
      
      dispatch(
        login({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          accessToken: user.accessToken,
          photo: user.photoURL,
        })
      );
      dispatch(setError(null));
    } catch (error) {
      console.error(error);
      dispatch(setError(error.message));
    }
  };
};

export const actionUpdateProfile = ({ name, photo }) => {
  return async (dispatch) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      dispatch(updateProfileStore({ name, photo }));
      dispatch(setError(null));
    } catch (error) {
      console.error(error);
      dispatch(setError(error.message));
    }
  };
};

export const actionLogout = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch(logout());
      dispatch(setError(null));
    } catch (error) {
      console.error(error);
      dispatch(setError(error.message));
      }
  };
};