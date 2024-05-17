import { createSlice } from "@reduxjs/toolkit";
import { getData, getDataFiltered } from "./filtersByButtonsActions";

const initialState = {
    data: {
        metadatos: [],
        analisisDigital: [],
        busquedaInversa: []
    },
    error: null,
    loading: true,
    selectedComponent: null
};

const filtersByButtonsSlice = createSlice({
    name: 'filtersByButtonsSlice',
    initialState,
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
                const category = action.meta.arg.filterValue;
                state.data[category] = action.payload;
                state.loading = false;
            })
            .addCase(getData.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(getDataFiltered.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDataFiltered.fulfilled, (state, action) => {
                const category = action.meta.arg.filterValue;
                state.data[category] = action.payload;
                state.loading = false;
            })
            .addCase(getDataFiltered.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

export const { setData, setSelectedComponent } = filtersByButtonsSlice.actions;

export default filtersByButtonsSlice.reducer;
