import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types/app.types";


type ProductState = {
    products: Product[];
    loading: boolean;
    error: string | null;
};

const intialState: ProductState = {
    products: [],   
    loading: false,
    error: null,
};

const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.in/api/products');
    return response.data.products;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: intialState,
    reducers: {
        clearStore: () => {
            return intialState;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? null;
        });
    }
});

export default productsSlice.reducer;
export { fetchProducts };
export const { clearStore } = productsSlice.actions;