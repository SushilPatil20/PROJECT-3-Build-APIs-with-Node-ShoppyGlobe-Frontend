import { createSlice } from "@reduxjs/toolkit";
import { storeInLocal } from "../../utils/helpers";

const cartItems = JSON.parse(localStorage.getItem('items'));

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: cartItems || []
    },
    reducers: {
        // --------------- Action to add item to Cart ---------------
        addToCart: (state, action) => {
            const existingItem = state.items.find((item => item.id === action.payload.id))
            if (!existingItem) {
                state.items.push({ ...action.payload, quantity: action.payload.quantity })
            }
            storeInLocal('items', state.items);
            // localStorage.setItem('items', JSON.stringify(state.items))
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
            storeInLocal('items', state.items);
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find((item) => item.id == action.payload)
            if (item) {
                item.quantity += 1;
            }
            storeInLocal('items', state.items);
        }, decreaseQuantity: (state, action) => {
            const item = state.items.find((item) => item.id == action.payload)
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            storeInLocal('items', state.items);
        },
        // --------------- Clearing Cart ---------------
        clearCart: (state, action) => {
            state.items = []
            storeInLocal('items', state.items);
        }
    }
})
export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer