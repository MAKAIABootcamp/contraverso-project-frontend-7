import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  imgProfile: ''
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.imgProfile = action.payload.photo; 
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    updateProfileStore: (state, action) => {
      if (state.user) {
        state.user.displayName = action.payload.name;
        state.user.photoURL = action.payload.photo;
        state.imgProfile = action.payload.photo;
      }
    },
  },
});

export const { login, logout, setError, updateProfileStore } = userAuthSlice.actions;

export default userAuthSlice.reducer;
