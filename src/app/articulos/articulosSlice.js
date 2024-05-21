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
        }
    }
})

export const { articulosRequest, fillArticulos, articulosFail } =
  articulosSlice.actions;

export default articulosSlice.reducer;