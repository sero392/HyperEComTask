import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/ProductSlice";
import basketReducer from "../Features/BasketSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        basket: basketReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});