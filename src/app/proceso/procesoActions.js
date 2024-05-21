import { collection, getDocs } from "@firebase/firestore";
import { procesoRequest, procesoFail, fillProceso } from "./procesoSlice.js";
import { db } from "../../Firebase/firebaseConfig";


const COLLECTION_NAME = "somosNuestroProceso";
const collectionRef = collection(db, COLLECTION_NAME);

export const actionGetProceso = () => {
    return async (dispatch) => {
        dispatch(procesoRequest());
        const proceso = [];
        try {
            const querySnapshot = await getDocs(collectionRef);
            querySnapshot.forEach((doc) => {
              proceso.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            dispatch(fillProceso(proceso));
        } catch (error) {
            console.error(error);
            dispatch(procesoFail(error.message));
        }
    }
}