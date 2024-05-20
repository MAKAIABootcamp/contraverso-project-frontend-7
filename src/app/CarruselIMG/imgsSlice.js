import { createSlice } from "@reduxjs/toolkit";

const imgsSlice = createSlice({
  name: "imgs",
  initialState: {
    imgs: [],
    isLoadingImgs: false,
    errorImgs: null,
    successRequest: null,
    imageForEdit: null,
  },
  reducers: {
    imgsRequest: (state) => {
      state.isLoadingImgs = true;
      state.errorImgs = null;
      state.successRequest = null;
    },
    imgsFail: (state, action) => {
      (state.isLoadingImgs = false),
        (state.errorImgs = action.payload),
        (state.successRequest = false);
    },
    addImgs: (state, action) => {
      state.imgs.push(action.payload);
      state.isLoadingImgs = false;
      state.successRequest = "addImgs";
    },
    editImg: (state, action) => {
      state.isLoadingImgs = false;
      state.imgs = state.imgs.map((item) =>
        action.payload.id == item.id ? { ...item, ...action.payload } : item
      );
      state.successRequest = "editImgs";
    },

    setImageForEdit: (state, action) => {
      state.imageForEdit = action.payload;
    },

    deleteImg: (state, action) => {
      state.isLoadingImgs = false;
      state.mascotas = state.imgs.filter(
        (item) => item.id != action.payload
      );
      state.successRequest = true;
    },
    setSuccessRequest: (state) => {
      state.successRequest = null;
    },

  },
});

export const {
  imgsRequest,
  imgsFail,
  addImgs,
  editImg,
  setImageForEdit,
  deleteImg,
  setSuccessRequest,
} = imgsSlice.actions; //Creators action

export default imgsSlice.reducer; //La función reductora
