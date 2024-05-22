import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    articulos: [],
    isLoadingArticulos: false,
    errorArticulos: null
}

const articulosSlice = createSlice({
    name: 'articulos',
    initialState: initialState,
    reducers: {
        articulosRequest: (state) => {
            state.isLoadingArticulos = true;
            state.errorArticulos = null;
        },
        fillArticulos: (state, action) => {
            state.articulos = action.payload;
            state.isLoadingArticulos = false;
            state.errorArticulos = null;
        },
        articulosFail: (state, action) => {
            state.errorArticulos = action.payload;
            state.isLoadingArticulos = false;
        },
        editArti: (state, action) => {
            state.isLoadingArticulos = false;
            state.articulos = state.articulos.map((item) =>
              action.payload.id == item.id ? { ...item, ...action.payload } : item
            );
            state.successRequest = "editArti";
          },

    }
})

export const { articulosRequest, fillArticulos, articulosFail, editArti } =
  articulosSlice.actions;

export default articulosSlice.reducer;