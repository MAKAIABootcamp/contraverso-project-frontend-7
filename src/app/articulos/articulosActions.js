import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "@firebase/firestore";
import { articulosRequest, articulosFail, fillArticulos, editArti, deleteArti, addArti } from "./articulosSlice";
import { db } from "../../Firebase/firebaseConfig";
import fileUpload from "../../services/clouCarrArti/fileUpload";
import Swal from "sweetalert2";


const COLLECTION_NAME = "confrontaArticulos";
const collectionRef = collection(db, COLLECTION_NAME);

export const actionGetArticulos = () => {
  return async (dispatch) => {
    dispatch(articulosRequest());
    const articulos = [];
    try {
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        articulos.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch(fillArticulos(articulos));
    } catch (error) {
      console.error(error);
      dispatch(articulosFail(error.message));
    }
  }
}

export const actionAddArti = ({ file, description, title, url }) => {
  return async (dispatch) => {
    if (!file || !description.trim() || !title.trim() || !url.trim()) {
      console.error("Datos del formulario inválidos.");
      return;
    }
    dispatch(articulosRequest());
    try {
      // Subir la imagen a Cloudinary
      const imageUrl = await fileUpload(file);

      // Guardar los metadatos en Firestore
      const docRef = await addDoc(collectionRef, {
        poster: imageUrl,
        description: description,
        title: title,
        url: url,
      });
      console.log("Documento escrito con ID: ", docRef.id);

      // Despachar la acción para actualizar el estado de Redux
      dispatch(addArti({ id: docRef.id, poster: imageUrl, description, title, url }));
    } catch (error) {
      console.error("Error al agregar la imagen: ", error);
      dispatch(articulosFail(error.message));
    }
  };
};

export const actionDeleteArti = (idArti) => {
  return async (dispatch) => {
    if (!idArti) {
      console.error("ID del documento no especificado.");
      return;
    }

    try {
      // Lógica para eliminar el documento de Firestore
      // Por ejemplo:
      const docRef = doc(db, COLLECTION_NAME, idArti);
      await deleteDoc(docRef);
      Swal.fire({
        title: "Bien hecho",
        text: "Artículo eliminada correctamente de la base de datos",
        icon: "success",
        confirmButtonText: "OK",
        
      });
      dispatch(deleteArti(idArti));

    } catch (error) {
      console.error("Error al eliminar el documento:", error);
    }
  };
};

export const actionEditArti = (idArti, editedArti) => {
  return async (dispatch) => {
    dispatch(articulosRequest());
    try {
      // Subir la imagen a Cloudinary
      if (editedArti?.file) {
        const imageUrl = await fileUpload(editedArti.file);

        if (!imageUrl) {
          throw new Error("Error al subir la imagen a Cloudinary");
        }

        editedArti.poster = imageUrl;
        delete editedArti.file;
      }
      const imgRef = doc(db, COLLECTION_NAME, idArti);

      await updateDoc(imgRef, { ...editedArti });
      dispatch(
        editArti({
          id: idArti,
          ...editedArti,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(articulosFail(error.message));
    }
  };
};