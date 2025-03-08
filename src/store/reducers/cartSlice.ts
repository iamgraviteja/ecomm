import { createSlice } from "@reduxjs/toolkit";

import { CartState } from "../../types/app.types";


const initialState: CartState = {
    items: [],
    total: 0,
    totalItems: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.total += action.payload.price;
            state.totalItems += 1;
        },
        removeFromCart: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter((item) => item.id !== action.payload.id);
                }
                state.total -= action.payload.price;
                state.totalItems -= 1;
            }
        },
        clearCart: () => {
            return initialState;
        },
    }
});

export const { addToCart,removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;