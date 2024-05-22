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
        editFanzi: (state, action) => {
            state.isLoadingFanzi = false;
            state.fanzi = state.fanzi.map((item) =>
              action.payload.id == item.id ? { ...item, ...action.payload } : item
            );
            state.successRequest = "editFanzi";
          },

    }
})

export const { fanzinesRequest, fillFanzines, fanzinesFail, fanzinesArti, editFanzi} =
  fanzinesSlice.actions;

export default fanzinesSlice.reducer;
