import { collection, getDocs } from "@firebase/firestore";
import { articulosRequest, articulosFail, fillArticulos } from "./articulosSlice";
import { db } from "../../Firebase/firebaseConfig";


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