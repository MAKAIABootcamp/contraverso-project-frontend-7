import { configureStore } from '@reduxjs/toolkit'
import userAuthReducer from './features/userAuth/userAuthSlice'
import filtersByButtonsReducer from './features/filtersByButtons/filtersByButtonsSlice';

const store = configureStore({
  reducer:  {
    userAuth: userAuthReducer,
    filtersByButtons: filtersByButtonsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
