import { createSlice } from '@reduxjs/toolkit';

export interface WishlistState<T> {
    items: Array<T>;
}

const initialState: WishlistState<number> = {
    items: [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        toggleItem: (state, action) => {
            const index = state.items.indexOf(action.payload);
            if (index >= 0) {
                state.items.splice(index, 1);
            } else {
                state.items.push(action.payload);
            }
        },
        clearWishlist: (state) => {
            state.items = [];
        },
    },
});

export const { toggleItem, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;