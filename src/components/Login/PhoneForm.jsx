import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const PhoneForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      prefix: "+57",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .required("El número de teléfono es requerido")
        .matches(/^\d{10}$/, "Debe ser un número de teléfono válido con 10 dígitos"),
    }),
    onSubmit: (values) => {
      const fullPhoneNumber = values.prefix + values.phoneNumber;
      console.log("Prefijo y número:", fullPhoneNumber);
      navigate("/verificacion");
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Phone number</label>
        <div>
          <div>
            <select
              style={{ fontSize: "14px" }}
              name="prefix"
              value={formik.values.prefix}
              onChange={formik.handleChange}
            >
              <option value="+57">+57</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="1234567890"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="phoneNumber"
          />
        </div>
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div>{formik.errors.phoneNumber}</div>
        ) : null}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PhoneForm;
