import { configureStore } from '@reduxjs/toolkit'
import userAuthReducer from './features/userAuth/userAuthSlice'
import filtersByButtonsReducer from './features/filtersByButtons/filtersByButtonsSlice';
import imgsReducer from "./CarruselIMG/imgsSlice.js";

const store = configureStore({
  reducer:  {
    userAuth: userAuthReducer,
    filtersByButtons: filtersByButtonsReducer,
    imgs: imgsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;


