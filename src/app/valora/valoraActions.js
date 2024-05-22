import { collection, getDocs } from "@firebase/firestore";
import { valoraRequest, valoraFail, fillValora} from "./valoraSlice";
import { db } from "../../Firebase/firebaseConfig";



const COLLECTION_NAME = "verificaValora";
const collectionRef = collection(db, COLLECTION_NAME);

export const actionGetValora = () => {
    return async (dispatch) => {
        dispatch(valoraRequest());
        const valora = [];
        try {
            const querySnapshot = await getDocs(collectionRef);
            querySnapshot.forEach((doc) => {
              valora.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            dispatch(fillValora(valora));
        } catch (error) {
            console.error(error);
            dispatch(valoraFail(error.message));
        }
    }
}
