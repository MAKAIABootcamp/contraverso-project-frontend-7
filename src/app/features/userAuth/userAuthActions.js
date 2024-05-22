import { signInWithEmailAndPassword, updatePassword, updateProfile, signOut } from 'firebase/auth';
import { auth } from '../../../Firebase/firebaseConfig';
import { login, logout, setError, updateProfileStore } from './userAuthSlice';
import Swal from 'sweetalert2';

export const actionLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      Swal.fire({
        position: 'Center',
        icon: 'success',
        title: `Inicio de sesión exitoso: ${user.displayName}`,
        showConfirmButton: false,
        timer: 3000,
      });

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
      console.error('Error al iniciar sesión:', error);
      Swal.fire({
        position: 'Center',
        icon: 'warning',
        title: 'Verifique sus credenciales.',
        text: 'Por favor, intente nuevamente con sus credenciales correctas.',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
      });

      dispatch(setError(error.message));
    }
  };
};


export const actionUpdateProfile = ({ name, photo, newPassword }) => {
  return async (dispatch) => {
    try {
      const user = auth.currentUser;

      if (name || photo) {
        await updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });

        dispatch(updateProfileStore({ name, photo }));
      }

      if (newPassword) {
        await updatePassword(user, newPassword);
      }

      dispatch(setError(null));

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Perfil actualizado exitosamente",
        showConfirmButton: false,
        timer: 2500
      });

    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      dispatch(setError(error.message));
    }
  };
};

export const actionLogout = () => {
  return async (dispatch) => {
    try {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, cerrar sesión',
        cancelButtonText: 'Cancelar',
      });

      if (result.isConfirmed) {
        await signOut(auth);
        dispatch(logout());
        dispatch(setError(null));
      }
    } catch (error) {
      console.error(error);
      dispatch(setError(error.message));
    }
  };
};
