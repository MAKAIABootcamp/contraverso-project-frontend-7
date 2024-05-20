import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";

import {
    addImgs,
    deleteImg,
    editImg,
    imgsFail,
    imgsRequest,
  } from "./imgsSlice";

  import fileUpload from "../../services/cloudiCarruIMG/fileUpload";
  

const COLLECTION_NAME = "expresaImagenes"; 
const collectionRef = collection(db, COLLECTION_NAME); 

export const actionAddImg = ({ file, author, name }) => {
  return async (dispatch) => {
    if (!file ||!author.trim() ||!name.trim()) {
      console.error("Datos del formulario inválidos.");
      return;
    }
    try {
      // Subir la imagen a Cloudinary
      const imageUrl = await fileUpload(file);
      
      // Guardar los metadatos en Firestore
      const docRef = await addDoc(collection(db, "expresaImagenes"), {
        poster: imageUrl,
        author: author,
        name: name,
      });
      
      console.log("Documento escrito con ID: ", docRef.id);
    } catch (error) {
      console.error("Error al agregar la imagen: ", error);
    }
  };
};



export const actionGetImgs = () => {
  return async (dispatch) => {
    dispatch(imgsRequest());
    const imgs = [];
    try {
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        imgs.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch(fillImgs(imgs));
    } catch (error) {
      console.error(error);
      dispatch(imgsFail(error.message));
    }
  };
};


export const actionDeleteImgs = (idImg) => {
  return async (dispatch) => {
    if (!idImg) {
      console.error("ID del documento no especificado.");
      return;
    }

    try {
      // Lógica para eliminar el documento de Firestore
      // Por ejemplo:
      const docRef = doc(db, "expresaImagenes", idImg);
      await deleteDoc(docRef);
      console.log("Documento eliminado correctamente de Firestore");
    } catch (error) {
      console.error("Error al eliminar el documento:", error);
    }
  };
};

export const actionEditImgs = (idImg, editedImg) => {
  return async (dispatch) => {
    dispatch(imgsRequest());
    try {
      const imgRef = doc(db, COLLECTION_NAME, idImg);

      await updateDoc(imgRef, editedImg);
      dispatch(
        editImg({
          id: idImg,
          ...editedImg,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(imgsFail(error.message));
    }
  };
};


