import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: null,
    sectionSelected: 1
}

const filtersByButtonsSlice = createSlice({
    name: 'filtersByButtonsSlice',
    initialState: initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setSectionSelected: (state, action) => {
            state.sectionSelected = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setData, setSectionSelected, setError } = filtersByButtonsSlice.actions;

export default filtersByButtonsSlice.reducer;
