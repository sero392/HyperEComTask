import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basketItems: [],
        isBasketOpen: false,
    }, reducers: {
        addBasketItem: (state, action) => {
            state.isBasketOpen = true;
            const currentBasketItem = state.basketItems.find((f) => f.productID == action.payload.productID);

            if (currentBasketItem) {
                currentBasketItem.Count += 1;
                return;
            }

            state.basketItems.push({
                ...action.payload,
                Count: 1
            });
        },
        //Arayüzde kullanmadım fakat metodunu hazırladım.
        removeBasketItem: (state, action) => {
            console.log(action)
            state.basketItems = state.basketItems.filter(item => item.productID !== action.payload.productID);
        },
        clearBasket: (state) => {
            state.basketItems = [];
        },
        toggleBasket: (state, action) => {
            state.isBasketOpen = action?.payload;
        }
    }
});

export const { addBasketItem, removeBasketItem, clearBasket, toggleBasket } = basketSlice.actions;
export default basketSlice.reducer;