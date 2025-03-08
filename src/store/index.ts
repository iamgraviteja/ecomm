import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import cartReducer from "./reducers/cartSlice";
import productsReducer from "./reducers/productsSlice";
import themeReducer from "./reducers/themeSlice";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  products: productsReducer,
  theme: themeReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;