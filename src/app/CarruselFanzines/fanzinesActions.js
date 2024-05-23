import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "@firebase/firestore";
import { fanzinesRequest, fanzinesFail, fillFanzines, editFanzi, addFanzi, deleteFanzi } from "./fanzinesSlices";
import { db } from "../../Firebase/firebaseConfig";
import fileUpload from "../../services/cloudiFanzines/fileUpload";
import Swal from "sweetalert2";

const COLLECTION_NAME = "fanzines";
const collectionRef = collection(db, COLLECTION_NAME);

export const actionGetFanzines = () => {
    return async (dispatch) => {
        dispatch(fanzinesRequest());
        const fanzines = [];
        try {
            const querySnapshot = await getDocs(collectionRef);
            querySnapshot.forEach((doc) => {
              fanzines.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            dispatch(fillFanzines(fanzines));
        } catch (error) {
            console.error(error);
            dispatch(fanzinesFail(error.message));
        }
    }
}

export const actionAddFanzi = ({ file, name, urlDocument }) => {
    return async (dispatch) => {
      if (!file || !name.trim() || !urlDocument.trim()){
        console.error("Datos del formulario inválidos.");
        return;
      }
      dispatch(fanzinesRequest());
      try {
        const imageUrl = await fileUpload(file);
        const docRef = await addDoc(collectionRef, {
          poster: imageUrl,
          name: name,
          urlDocument: urlDocument,
        });
        dispatch(addFanzi({ id: docRef.id, poster: imageUrl, name, urlDocument }));
      } catch (error) {
        console.error("Error al agregar la imagen: ", error);
        dispatch(fanzinesFail(error.message));
      }
    };
};

export const actionDeleteFanzi = (idFanzi) => {
    return async (dispatch) => {
      if (!idFanzi) {
        console.error("ID del documento no especificado.");
        return;
      }
      try {
        const docRef = doc(db, COLLECTION_NAME, idFanzi);
        await deleteDoc(docRef);
        Swal.fire({
          title: "Bien hecho",
          text: "Fanzine eliminado correctamente de la base de datos",
          icon: "success",
          confirmButtonText: "OK",
        });
        dispatch(deleteFanzi(idFanzi));
      } catch (error) {
        console.error("Error al eliminar el documento:", error);
      }
    };
};

export const actionEditFanzi = (idFanzi, editedFanzi) => {
    return async (dispatch) => {
      dispatch(fanzinesRequest());
      try {
        if (editedFanzi?.file) {
          const imageUrl = await fileUpload(editedFanzi.file);
          if (!imageUrl) {
            throw new Error("Error al subir la imagen a Cloudinary");
          }
          editedFanzi.poster = imageUrl;
          delete editedFanzi.file;
        }
        const imgRef = doc(db, COLLECTION_NAME, idFanzi);
        await updateDoc(imgRef, { ...editedFanzi });
        dispatch(editFanzi({ id: idFanzi, ...editedFanzi }));
      } catch (error) {
        console.error(error);
        dispatch(fanzinesFail(error.message));
      }
    };
};
