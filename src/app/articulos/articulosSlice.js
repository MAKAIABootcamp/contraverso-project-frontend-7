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
        addArti: (state, action) => {
            state.articulos.push(action.payload);
            state.isLoadingArticulos = false;
            state.errorArticulos = null;
        },
        editArti: (state, action) => {
            state.isLoadingArticulos = false;
            state.articulos = state.articulos.map((item) =>
              action.payload.id == item.id ? { ...item, ...action.payload } : item
            );
            state.successRequest = "editArti";
          },
        deleteArti: (state, action) => {
            state.articulos = state.articulos.filter(
              article => article.id !== action.payload
            );
        }

    }
})

export const { articulosRequest, fillArticulos, articulosFail,addArti, editArti, deleteArti } =
  articulosSlice.actions;

export default articulosSlice.reducer;