import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fanzines: [],
    isLoadingFanzines: false,
    errorFanzines: null
}

const fanzinesSlice = createSlice({
    name: 'fanzines',
    initialState: initialState,
    reducers: {
        fanzinesRequest: (state) => {
            state.isLoadingFanzines = true;
            state.errorFanzines = null;
        },
        fillFanzines: (state, action) => {
            state.fanzines = action.payload;
            state.isLoadingFanzines = false;
            state.errorFanzines = null;
        },
        fanzinesFail: (state, action) => {
            state.errorFanzines = action.payload;
            state.isLoadingFanzines = false;
        },
        addFanzi: (state, action) => {
            state.fanzines.push(action.payload);
            state.isLoadingFanzines = false;
            state.errorFanzines = null;
        },
        editFanzi: (state, action) => {
            state.isLoadingFanzines = false;
            state.fanzines = state.fanzines.map((item) =>
              action.payload.id === item.id ? { ...item, ...action.payload } : item
            );
        },
        deleteFanzi: (state, action) => {
            state.fanzines = state.fanzines.filter(
              article => article.id !== action.payload
            );
        }
    }
})

export const { fanzinesRequest, fillFanzines, fanzinesFail, editFanzi, addFanzi, deleteFanzi } = fanzinesSlice.actions;

export default fanzinesSlice.reducer;
