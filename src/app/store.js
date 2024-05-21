import { configureStore } from '@reduxjs/toolkit'
import userAuthReducer from './features/userAuth/userAuthSlice'
import filtersByButtonsReducer from './features/filtersByButtons/filtersByButtonsSlice';
import imgsReducer from "./CarruselIMG/imgsSlice.js";
import articulosReducer from './articulos/articulosSlice.js'
import procesoReducer from "./proceso/procesoSlice.js"

const store = configureStore({
  reducer:  {
    userAuth: userAuthReducer,
    filtersByButtons: filtersByButtonsReducer,
    imgs: imgsReducer,
    articulos: articulosReducer,
    proceso: procesoReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;


