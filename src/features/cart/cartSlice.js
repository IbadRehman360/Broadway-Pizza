import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [

    ],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
        },
        increaseQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
            if (item.quantity <= 0) cartSlice.caseReducers.deleteItem(state, action)

        },
        clearCart(state, action) {
            state.cart = [];
        },
    }
})

export default cartSlice.reducer;
export const { addItem, decreaseQuantity, deleteItem, clearCart, increaseQuantity } = cartSlice.actions;
export const getCart = (store) => store.cart.cart
export const calculatePizzasQuantity = (cart) => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
};

export const calculatePizzasPrice = (cart) => {
    return cart.reduce((acc, item) => acc + item.unitPrice, 0);
};
export const isInCard = id => store => store.cart.cart.find(items => items.pizzaId === id)?.quantity 
