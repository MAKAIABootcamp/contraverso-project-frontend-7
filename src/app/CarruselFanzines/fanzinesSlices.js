import { createSlice } from "@reduxjs/toolkit";

const fanzinesSlice = createSlice({
  name: "fanzines",
  initialState: {
    fanzines: [],
    isLoadingFanzines: false,
    errorFanzines: null,
    successRequest: null,
    fanzineForEdit: null,
  },
  reducers: {
    fanzinesRequest: (state) => {
      state.isLoadingFanzines = true;
      state.errorFanzines = null;
      state.successRequest = null;
    },
    fillFanzines: (state, action) => {
      state.fanzines = action.payload;
      state.isLoadingFanzines = false;
      state.errorFanzines = null;
      state.successRequest = "getAllFanzines";
    },
    fanzinesFail: (state, action) => {
      state.isLoadingFanzines = false;
      state.errorFanzines = action.payload;
      state.successRequest = false;
    },
    addFanzine: (state, action) => {
      state.fanzines.push(action.payload);
      state.isLoadingFanzines = false;
      state.successRequest = "addFanzine";
    },
    editFanzine: (state, action) => {
      state.isLoadingFanzines = false;
      state.fanzines = state.fanzines.map((fanzine) =>
        fanzine.id === action.payload.id
          ? { ...fanzine, ...action.payload }
          : fanzine
      );
      state.successRequest = "editFanzine";
    },
    setFanzineForEdit: (state, action) => {
      state.fanzineForEdit = action.payload;
    },
    deleteFanzine: (state, action) => {
      state.isLoadingFanzines = false;
      state.fanzines = state.fanzines.filter(
        (fanzine) => fanzine.id !== action.payload
      );
      state.successRequest = "deleteFanzine";
    },
    setSuccessRequest: (state) => {
      state.successRequest = null;
    },
  },
});

export const {
  fanzinesRequest,
  fanzinesFail,
  addFanzine,
  editFanzine,
  setFanzineForEdit,
  deleteFanzine,
  setSuccessRequest,
  fillFanzines,
} = fanzinesSlice.actions;

export default fanzinesSlice.reducer;
