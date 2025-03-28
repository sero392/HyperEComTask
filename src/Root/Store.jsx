import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/ProductSlice";
import basketReducer from "../Features/BasketSlice";
import globalReducer from "../Features/GlobalSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        basket: basketReducer,
        global: globalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});