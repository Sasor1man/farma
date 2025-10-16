import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BrandFilter, ICatalogState } from "./types";
import { fetchBrands } from "./thunks";

const defaultFilter = {
    checkboxes: [],
    availability: false,
    priceMin: 0,
    priceMax: 0,
}

const initialState: ICatalogState = {
    filter: defaultFilter,
    isLoading: false
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        _setFilter(state, action: PayloadAction<BrandFilter>) {
            state.filter = {...state.filter, ...action.payload}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrands.pending, (state => {
                state.isLoading = true;
            }))
            .addCase(fetchBrands.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchBrands.fulfilled, (state) => {
                state.isLoading = false;
            })
    }
})

export default catalogSlice