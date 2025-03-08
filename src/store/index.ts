import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import themeReducer from "./reducers/themeSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        theme: themeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;