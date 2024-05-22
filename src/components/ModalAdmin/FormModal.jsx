import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { actionUpdateProfile } from "../../app/features/userAuth/userAuthActions";
import styled from "styled-components";
import Button from "../Button/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 0.8rem;
  font-size: 1rem;
  color: white;
  font-family: "Founders Grotesk";
`;

const DivImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    object-fit: cover;
    width: 15vh;
    height: 15vh;
    border-radius: 50%;
  }
  input {
    padding-bottom: 1rem;
  }
`;

const DivPassword = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;
  label {
    display: flex;
    gap: 1rem;
    cursor: pointer
  }
`;
const DivName = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const DivErrors = styled.div`
  padding-bottom: 0.2rem;
  color: purple;
`;

const InputStyled = styled.input`
  border: transparent;
  border-bottom: 2px solid skyblue;
  outline: none;
  padding: 8px 0;
  font-size: 16px;
  background-color: transparent;
  color: white;

  &:hover {
    border-bottom-color: yellow;
  }

  &:focus {
    border-bottom-color: skyblue;
  }
`;

const FormModal = () => {
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState("");
  const { imgProfile } = useSelector((store)=> store.userAuth);
  const [showPassword, setShowPassword] = useState(false);
  const [width, setWidth] = useState(9);

  useEffect(() => {
    const handleButtonWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1200) {
        setWidth(12);
      } else if (screenWidth > 1800) {
        setWidth(14);
      } else {
        setWidth(8.5);
      }
    };

    handleButtonWidth();

    window.addEventListener("resize", handleButtonWidth);

    return () => {
      window.removeEventListener("resize", handleButtonWidth);
    };
  }, []);


  const url_pv = imgProfile;

  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      image: Yup.mixed()
        .required("La imagen es requerida")
        .test("fileType", "Tipo de archivo inválido", (value) => {
          if (!value) return false;
          const fileTypes = ["image/jpeg", "image/png"];
          return fileTypes.includes(value.type);
        }),
      password: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .matches(
          /[\d\.\w\s]/g,
          "La contraseña debe contener números, puntos y/o caracteres especiales"
        ),
    }),
    onSubmit: async (values) => {
      try {
        if (!values.image) {
          alert("La imagen es requerida");
          return;
        }

        const formData = new FormData();
        formData.append("file", values.image);
        formData.append("upload_preset", "profileimg");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dvafjaqbd/image/upload",
          formData
        );

        const imageUrl = response.data.secure_url;

        await dispatch(
          actionUpdateProfile({
            name: values.name || null,
            photo: imageUrl,
            newPassword: values.password || null,
          })
        );

        setPreviewImage("");
        formik.resetForm();
      } catch (error) {
        console.error("Error al enviar los datos:", error);
      }
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      formik.setFieldValue("image", file);
    }
  };

  return (
    <div>
      <FormStyled onSubmit={formik.handleSubmit}>
        <DivImg>
          <label htmlFor="image" style={{ marginBottom: "10px" }}>
            {previewImage ? (
              <img src={previewImage} alt="Vista previa" />
            ) : (
              <img src={url_pv} alt="Imagen previa" />
            )}
          </label>
          <input
            id="image"
            name="image"
            type="file"
            onChange={handleFileChange}
          />
          {formik.errors.image ? <div>{formik.errors.image}</div> : null}
        </DivImg>
        <DivName>
          <label htmlFor="name">Cambiar nombre</label>
          <InputStyled
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <DivErrors>{formik.errors.name}</DivErrors>
          ) : null}
        </DivName>
        <DivPassword>
          <label htmlFor="password">Cambiar contraseña <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span> </label>
          <InputStyled
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <DivErrors>{formik.errors.password}</DivErrors> : null}
        </DivPassword>
        <div type="submit">
          <Button fondoColor={'#FFF35F'} width={width}>Actualizar</Button>
        </div>
      </FormStyled>
    </div>
  );
};

export default FormModal;
