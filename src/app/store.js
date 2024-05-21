import { configureStore } from '@reduxjs/toolkit'
import userAuthReducer from './features/userAuth/userAuthSlice'
import filtersByButtonsReducer from './features/filtersByButtons/filtersByButtonsSlice';
import imgsReducer from "./CarruselIMG/imgsSlice.js";
import fanzineReducer from './CarruselFanzines/fanzinesSlices'

const store = configureStore({
  reducer:  {
    userAuth: userAuthReducer,
    filtersByButtons: filtersByButtonsReducer,
    imgs: imgsReducer,
    fanzines: fanzineReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;


