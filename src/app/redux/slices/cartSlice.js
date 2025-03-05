// features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        item =>
          item.id === action.payload.id &&
          item.selectedColor === action.payload.selectedColor &&
          item.selectedSize === action.payload.selectedSize
      );
    
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        item =>
          item.id === action.payload.id &&
          item.selectedColor === action.payload.selectedColor &&
          item.selectedSize === action.payload.selectedSize
      );
    
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrement quantity if greater than 1
        } else {
          // Remove the item if quantity is 1
          state.items = state.items.filter(
            item =>
              !(
                item.id === action.payload.id &&
                item.selectedColor === action.payload.selectedColor &&
                item.selectedSize === action.payload.selectedSize
              )
          );
        }
      }
    },

  }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer