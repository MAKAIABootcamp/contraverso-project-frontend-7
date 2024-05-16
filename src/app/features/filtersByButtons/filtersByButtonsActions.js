import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../Firebase/firebaseConfig';
import { collection, getDocs } from '@firebase/firestore';

export const getData = createAsyncThunk(
  'filtersByButtons/getData',
  async (collectionName, thunkAPI) => {
    try {
      const getCollection = await getDocs(collection(db, collectionName));
      const data = getCollection.docs.map(doc => ({
        id: doc.id,
       ...doc.data(),
      }));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);