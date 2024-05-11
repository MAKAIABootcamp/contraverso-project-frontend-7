import { configureStore } from '@reduxjs/toolkit'
import userAuthReducer from './features/userAuth/userAuthSlice'

const store = configureStore({
  reducer:  {
    userAuth: userAuthReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
