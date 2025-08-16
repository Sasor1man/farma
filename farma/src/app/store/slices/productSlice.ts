// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/productInterface";

interface ProductState {
    products: Product[]
}

const initialState: ProductState = {
  products: [],
};

const productSlice = ({
    name: 'products',
    initialState,
    reducer:{

    }
})

export default productSlice.reducer;