import React from 'react';
import { useFormik } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebaseConfig'; 
import { useDispatch } from 'react-redux';
import { login } from '../../app/features/userAuth/userAuthSlice';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'; 

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Por favor, ingresa un email válido').required('El email es requerido'),
      password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es requerida'),
    }),
    onSubmit: async(values) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
        const userFirebase = userCredential.user;
        console.log("Inicio de sesión exitoso:", userFirebase);
        alert(`Bienvenido, ${userFirebase.email}`);
        dispatch(login(userFirebase));
        navigate('/inicio');
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
      {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="password">Contraseña</label>
      <input id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
      {formik.errors.password && formik.touched.password? <div>{formik.errors.password}</div> : null}

      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
