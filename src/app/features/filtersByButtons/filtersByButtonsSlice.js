import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: null,
    selectedComponent: null
}

const filtersByButtonsSlice = createSlice({
    name: 'filtersByButtonsSlice',
    initialState: initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setSelectedComponent: (state, action) => {
            state.selectedComponent = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setData, setSelectedComponent , setError } = filtersByButtonsSlice.actions;

export default filtersByButtonsSlice.reducer;
