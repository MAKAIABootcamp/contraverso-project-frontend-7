import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
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
      }
    },
  },
});

export const { login, logout, setError, updateProfileStore } = userAuthSlice.actions;

export default userAuthSlice.reducer;
