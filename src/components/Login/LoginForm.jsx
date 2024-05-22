import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actionLogin } from "../../app/features/userAuth/userAuthActions";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../Button/Button";
import * as Yup from "yup";

import "../../../fonts/fonts.css";
import styled from "styled-components";

const SectionForm = styled.section`
  margin-top: 1rem;
  padding-bottom: 1.3rem;
  width: 80%;
`;

const FormGroup = styled.form`
  padding-top: 0.4rem;
  label {
    display: block;
    font-size: 1.1rem;
    color: #555;
  }
  input[type="email"],
  input[type="password"],
  input[type="text"] {
    position: relative;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 5px;
    border: none;
    background-color: ;
    font-size: 0.9rem;
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
    font-size: 0.8rem;
    width: 15vw;
  }
`;
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const TogglePasswordIcon = styled.div`
position: absolute;
  right: 0;
  left: 75%;
  top: 68%;
  cursor: pointer;
  color: white;
  @media screen and (min-width: 1920px) and (height: 1080px) {
    top: 74%;
    left: 80%;
  }
  @media screen and (min-width: 1920px) and (height: 911px) {
    top: 72%;
    left: 80%;
  }
  @media screen and (min-width: 768px) and (height: 1024px) {
    top: 73%;
    left: 80%;
  }
  @media screen and (min-width: 600px) and (height: 800px) {
    top: 70%;
    left: 80%;
  }
@media(width: 414px) {
  top: 69%;
}
@media screen and (min-width: 375px) and (height: 812px) {
  top: 70%;
}
`;

const StyledIcon = styled.i`
  font-size: 1.2rem;
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.userAuth);
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );

  const [width, setWidth] = useState(10);

  useEffect(() => {
    const handleButtonWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1200) {
        setWidth(12);
      } else if (screenWidth > 1800) {
        setWidth(14);
      } else {
        setWidth(10);
      }
    };

    handleButtonWidth();

    window.addEventListener("resize", handleButtonWidth);

    return () => {
      window.removeEventListener("resize", handleButtonWidth);
    };
  }, []);

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

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <FormStyled onSubmit={handleFormSubmit} onKeyDown={handleKeyDown}>
      <SectionForm>
        <FormGroup className="acceso__login-card-body-form-group">
          <label htmlFor="email">Email</label>
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
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <TogglePasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <StyledIcon>
                <FaEye />
              </StyledIcon>
            ) : (
              <StyledIcon>
                <FaEyeSlash />
              </StyledIcon>
            )}
          </TogglePasswordIcon>
          {formik.errors.password && formik.touched.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </FormGroup>
      </SectionForm>

      <div type="submit">
        <Button width={width} fondoColor={"#29EBC4"}>
          Iniciar sesión
        </Button>
      </div>
    </FormStyled>
  );
};

export default LoginForm;
