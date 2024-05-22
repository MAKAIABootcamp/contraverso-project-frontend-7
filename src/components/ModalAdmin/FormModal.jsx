import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { actionUpdateProfile } from "../../app/features/userAuth/userAuthActions";
import styled from "styled-components";
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
    width: 6rem;
    height: 6rem;
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

const ButtonStyled = styled.button`
  width: 15vw;
  font-size: 0.8rem;
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
    letter-spacing: 0.2rem;
  }
`;

const TogglePasswordIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 30px;
  cursor: pointer;
  color: white;
`;

const FormModal = () => {
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const url_pv =
    "https://img.freepik.com/vector-premium/icono-imagen-o-foto-representacion-3d_593228-92.jpg";

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
        // Verificar el archivo antes de subir
        if (!values.image) {
          alert("La imagen es requerida");
          return;
        }

        // Preparar los datos para subir a Cloudinary
        const formData = new FormData();
        formData.append("file", values.image);
        formData.append("upload_preset", "profileimg");

        // Subir la imagen a Cloudinary
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dvafjaqbd/image/upload",
          formData
        );

        const imageUrl = response.data.secure_url;

        // Despachar la acción para actualizar el perfil
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
          <label htmlFor="name">Nombre</label>
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
          <label htmlFor="password">Contraseña (opcional) </label>
          <InputStyled
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <TogglePasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </TogglePasswordIcon>
          {formik.errors.password ? <DivErrors>{formik.errors.password}</DivErrors> : null}
        </DivPassword>
        <ButtonStyled type="submit">Actualizar</ButtonStyled>
      </FormStyled>
    </div>
  );
};

export default FormModal;
