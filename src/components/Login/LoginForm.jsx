import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actionLogin } from "../../app/features/userAuth/userAuthActions";
import { useNavigate } from "react-router-dom";
import { setError } from "../../app/features/userAuth/userAuthSlice";
import * as Yup from "yup";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isAuthenticated, error } = useSelector(
    (store) => store.userAuth
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Por favor, ingresa un email válido")
        .required("El email es requerido"),
      password: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .required("La contraseña es requerida"),
    }),
    onSubmit: async (values) => {
      dispatch(actionLogin(values));
    },
  });
  
  if (error) {
    alert("Ocurrió un error en el inicio de sesión");
    dispatch(setError(null));
  }
  if (isAuthenticated) {
    alert(`Bienvenido${user.displayName ? `, ${user.displayName}!` : "!"}`);
    navigate("/");
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && formik.touched.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
