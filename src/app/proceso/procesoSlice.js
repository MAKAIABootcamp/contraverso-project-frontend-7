import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    proceso: [],
    isLoadingProceso: false,
    errorProceso: null
}

const procesoSlice = createSlice({
    name: 'proceso',
    initialState: initialState,
    reducers: {
        procesoRequest: (state) => {
            state.isLoadingProceso = true;
            state.errorProceso = null;
        },
        fillProceso: (state, action) => {
            state.proceso = action.payload;
            state.isLoadingProceso = false;
            state.errorProceso = null;
        },
        procesoFail: (state, action) => {
            state.errorProceso = action.payload;
            state.isLoadingProceso = false;
        }
    }
})

export const { procesoRequest, fillProceso, procesoFail } =
  procesoSlice.actions;

export default procesoSlice.reducer;