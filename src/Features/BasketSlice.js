import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basketItems: [],
        isBasketOpen: false,
    }, reducers: {
        addBasketItem: (state, action) => {
            state.isBasketOpen = true;
            state.basketItems.push(action.payload);
        },
        //Arayüzde kullanmadım fakat metodunu hazırladım.
        removeBasketItem: (state, action) => {
            state.basketItems = state.basketItems.filter(item => item.id !== action.payload.id);
        },
        clearBasket: (state) => {
            state.basketItems = [];
        },
        toggleBasket: (state,action) => {
            state.isBasketOpen = action?.payload;
        }
    }
});

export const { addBasketItem, removeBasketItem, clearBasket, toggleBasket } = basketSlice.actions;
export default basketSlice.reducer;