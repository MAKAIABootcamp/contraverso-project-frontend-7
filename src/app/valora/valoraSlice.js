import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    valora: [],
    isLoadingValora: false,
    errorValora: null
}

const valoraSlice = createSlice({
    name: 'valora',
    initialState: initialState,
    reducers: {
        valoraRequest: (state) => {
            state.isLoadingValora = true;
            state.errorValora = null;
        },
        fillValora: (state, action) => {
            state.valora = action.payload;
            state.isLoadingValora = false;
            state.errorValora = null;
        },
        valoraFail: (state, action) => {
            state.errorValora = action.payload;
            state.isLoadingValora = false;
        }

    }
})

export const { valoraRequest, fillValora, valoraFail,} =
  valoraSlice.actions;

export default valoraSlice.reducer;