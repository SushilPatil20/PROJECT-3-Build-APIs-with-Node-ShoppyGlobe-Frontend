import { createSlice } from "@reduxjs/toolkit";

const cartItems = JSON.parse(localStorage.getItem('items'));

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: cartItems || []
    },
    reducers: {
        // Action to add item to cart
        addToCart: (state, action) => {
            const existingItem = state.items.find((item => item.id === action.payload.id))
            if (!existingItem) {
                state.items.push({ ...action.payload, quantity: action.payload.quantity })
            }

            localStorage.setItem('items', JSON.stringify(state.items))
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
            localStorage.setItem('items', JSON.stringify(state.items))
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find((item) => item.id == action.payload)
            if (item) {
                item.quantity += 1;
            }
            localStorage.setItem('items', JSON.stringify(state.items));

        }, decreaseQuantity: (state, action) => {
            const item = state.items.find((item) => item.id == action.payload)
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        clearCart: (state, action) => {
            state.items = []
            localStorage.setItem('items', JSON.stringify(state.items));
        }
    }
})
export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer