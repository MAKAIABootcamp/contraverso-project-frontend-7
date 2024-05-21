import { signInWithEmailAndPassword, updatePassword, updateProfile, signOut } from 'firebase/auth';
import { auth } from '../../../Firebase/firebaseConfig';
import { login, logout, setError, updateProfileStore } from './userAuthSlice';

export const actionLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Verificar los datos del usuario en la consola
      alert(`Inicio de sesión exitoso: ${user.displayName}`);
// ${user.photoURL}
      dispatch(
        login({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          accessToken: user.accessToken,
          photo: user.photoURL,
        }));
        localStorage.setItem('userPhotoURL', user.photoURL);
      dispatch(setError(null));
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      dispatch(setError(error.message));
    }
  };
};

export const actionUpdateProfile = ({ name, photo, newPassword }) => {
  return async (dispatch) => {
    try {
      const user = auth.currentUser;

      // Actualizar nombre y foto
      if (name || photo) {
        await updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });

        // Verificar los cambios en la consola
        console.log('Perfil actualizado:', user.displayName, user.photoURL);

        dispatch(updateProfileStore({ name, photo }));
      }

      // Actualizar contraseña
      if (newPassword) {
        await updatePassword(user, newPassword);
      }

      dispatch(setError(null));
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
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