import { configureStore } from '@reduxjs/toolkit'
import userAuthReducer from './features/userAuth/userAuthSlice'
import filtersByButtonsReducer from './features/filtersByButtons/filtersByButtonsSlice';
import imgsReducer from "./CarruselIMG/imgsSlice.js";
import fanzineReducer from './CarruselFanzines/fanzinesSlices'
import articulosReducer from './articulos/articulosSlice.js'
import procesoReducer from "./proceso/procesoSlice.js"
import valoraReducer from "./valora/valoraSlice.js"

const store = configureStore({
  reducer:  {
    userAuth: userAuthReducer,
    filtersByButtons: filtersByButtonsReducer,
    imgs: imgsReducer,
    articulos: articulosReducer,
    proceso: procesoReducer,
    fanzines: fanzineReducer,
    valora: valoraReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;


