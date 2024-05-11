import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    updateProfileStore(state, action) {
      state.user = {
        ...state.user,
        name: action.payload.name,
        photo: action.payload.photo
      }
    }
  },
});

export const { login, logout, setError, updateProfileStore } = userAuthSlice.actions;

export default userAuthSlice.reducer;
