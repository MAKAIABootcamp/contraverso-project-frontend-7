import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { actionUpdateProfile } from "../../app/features/userAuth/userAuthActions";

const FormModal = () => {
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState("");
  const url_pv = "https://img.freepik.com/vector-premium/icono-imagen-o-foto-representacion-3d_593228-92.jpg";

  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      password: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es requerido'),
      image: Yup.mixed()
       .required('La imagen es requerida')
       .test(
          "fileType",
          "Tipo de archivo inválido",
          (value) => {
            if (!value) return false;
            const fileTypes = ['image/jpeg', 'image/png'];
            return fileTypes.includes(value.type);
          }
        ),
      password: Yup.string()
       .min(8, 'La contraseña debe tener al menos 8 caracteres')
       .matches(/[\d\.\w\s]/g, 'La contraseña debe contener números, puntos y/o caracteres especiales')
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
        await dispatch(actionUpdateProfile({
          name: values.name,
          photo: imageUrl,
          newPassword: values.password || null, // Solo enviar la contraseña si no está vacía
        }));

        // Resetear el formulario y la vista previa de la imagen
        setPreviewImage("");
        formik.resetForm();
        alert("Perfil actualizado exitosamente");
      } catch (error) {
        console.error("Error al enviar los datos:", error);
      }
    }
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
      <form onSubmit={formik.handleSubmit}>
      <div>
          <label htmlFor="image">Imagen</label>
          <input
            id="image"
            name="image"
            type="file"
            onChange={handleFileChange}
          />
          {formik.errors.image? <div>{formik.errors.image}</div> : null}
        </div>
        <div style={{ marginBottom: '10px' }}>
          {previewImage ? (
            <img src={previewImage} alt="Vista previa" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          ) : (
            <img src={url_pv} alt="Imagen previa" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          )}
        </div>
        <div>
          <label htmlFor="password">Contraseña (opcional)</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
        <button type="submit">Actualizar perfil</button>
      </form>
    </div>
  );
}

export default FormModal;
