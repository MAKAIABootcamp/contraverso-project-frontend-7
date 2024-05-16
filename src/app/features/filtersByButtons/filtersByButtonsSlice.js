import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./filtersByButtonsActions";

const initialState = {
    data: [],
    error: null,
    loading: true,
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
        }
    },
    extraReducers: (builder) => {
        builder
           .addCase(getData.pending, (state) => {
                state.loading = true;
            })
           .addCase(getData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
           .addCase(getData.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
});

export const { setData, setSelectedComponent } = filtersByButtonsSlice.actions;

export default filtersByButtonsSlice.reducer;
