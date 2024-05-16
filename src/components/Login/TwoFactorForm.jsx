import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const TwoFactorForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      verificationCode: "",
    },
    validationSchema: Yup.object({
      verificationCode: Yup.string()
        .required("El código de verificación es requerido")
        .matches(/^\d{6}$/, "Debe ser un código válido de 6 dígitos"),
    }),
    onSubmit: (values) => {
      console.log("Código de verificación:", values.verificationCode);
      navigate('/');
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <label>Código de Verificación</label>
        <div className="verification-input-container">
          <input
            type="number"
            placeholder="123456"
            value={formik.values.verificationCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="verificationCode"
          />
        </div>
        {formik.touched.verificationCode && formik.errors.verificationCode ? (
          <div>{formik.errors.verificationCode}</div>
        ) : null}
        <button type="submit">Verificar</button>
      </form>
    </div>
  );
};

export default TwoFactorForm;
