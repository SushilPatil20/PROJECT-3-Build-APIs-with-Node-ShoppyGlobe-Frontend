import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // Action to add item to cart
        addToCart: (state, action) => {
            const existingItem = state.items.find((item => item.id === action.payload.id))
            console.log(existingItem)
            existingItem.quantity += 1
            if (existingItem) {

            }
            state.items.push({ ...action.payload, quantity: 1 })
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
    }
})
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer