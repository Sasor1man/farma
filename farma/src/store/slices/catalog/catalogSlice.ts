import { createSlice } from "@reduxjs/toolkit";
import { ICatalogState } from "./types";
import { fetchBrands } from "./thunks";

const initialState: ICatalogState = {
    brands: [],
    isLoading: false
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrands.pending, (state => {
                state.isLoading = true;
            }))
            .addCase(fetchBrands.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchBrands.fulfilled, (state, action) => {
                state.isLoading = false;
                state.brands = action.payload;
            })
    }
})

export default catalogSlice.reducer