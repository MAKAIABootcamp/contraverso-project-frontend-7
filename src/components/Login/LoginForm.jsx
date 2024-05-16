import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actionLogin } from "../../app/features/userAuth/userAuthActions";
import { useNavigate } from "react-router-dom";
import { setError } from "../../app/features/userAuth/userAuthSlice";
import * as Yup from "yup";

import "../../../fonts/fonts.css";
import styled from "styled-components";

const SectionForm = styled.section`
  margin-top: 1rem;
  padding-bottom: 1.3rem;
`;
const FormGroup = styled.form`
padding-top: .4rem;
label {
        display: block;
        font-size: 1.1rem;
        color: #555;
}
input[type="email"],
input[type="password"] {
        width: 18vw;
        padding: 0.5rem;
        margin-bottom: .5rem;
        border-radius: 5px;
        border: none;
        background-color: #f0f0f0;
        font-size: .9rem;
        color: #555;
        box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
        &:focus {
                outline: none;
                box-shadow: 0 0 5px #000000;
        }
}
div {
        padding-top: 0.1rem;
        padding-left: 1rem;
        color: #4900da;
        font-size: .8rem;
        width: 15vw;
}
`;
const ButtonStyled = styled.button`
width: 15vw;
font-size: .8rem;
color: #000000;
border: 2px outset #f1f1d8;
padding: 0.4rem 0.5rem;
border-radius: 0.3rem;
background: #f1f1d8;
cursor: pointer;
box-shadow: 0 0.24rem #b2adad4d;
&:active {
  background-color: #4900da;
  color: #f1f1d8;
  border: 2px solid #000000;
  box-shadow: 0 0.2rem #b2adad4d;
  transform: translateY(0.2rem);
  letter-spacing: .2rem;
}
`;
const FormStyled = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`;

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
        .email("Ingrese un email válido")
        .required("Su email es requerido"),
      password: Yup.string()
        .min(8, "Debe tener min 8 caracteres")
        .required("La contraseña es requerida"),
    }),
    onSubmit: async (values) => {
      dispatch(actionLogin(values));
    },
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    formik.handleSubmit(event);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleFormSubmit(event);
    }
  };

  if (error) {
    alert("Ocurrió un error en el inicio de sesión");
    dispatch(setError(null));
  }
  if (isAuthenticated) {
    alert(`Bienvenido${user.displayName ? `, ${user.displayName}!` : "!"}`);
    navigate("/");
  }


  return (
    <FormStyled onSubmit={handleFormSubmit} onKeyDown={handleKeyDown}>
      <SectionForm>
        <FormGroup className="acceso__login-card-body-form-group">
          <label htmlFor="email"> Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="div">{formik.errors.email}</div>
          ) : null}
        </FormGroup>
        <FormGroup className="acceso__login-card-body-form-group">
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
        </FormGroup>
      </SectionForm>

      <ButtonStyled type="submit" style={{ fontFamily: 'MADE Soulmaze' }}>Iniciar sesión</ButtonStyled>

    </FormStyled>
  );
};

export default LoginForm;
