import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.count++; // Increment count if item exists
        existingItem.totalPrice = existingItem.count * price; // Calculate total price
      } else {
        state.cartItems.push({ id, title, price, count: 1, totalPrice: price }); // Add new item with count 1
      }

      state.totalPrice += price; // Increment total price
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const { id, price } = action.payload;
      const itemToRemove = state.cartItems.find(item => item.id === id);

      if (itemToRemove) {
        itemToRemove.count--; 
        itemToRemove.totalPrice = itemToRemove.count * price; 
        if (itemToRemove.count === 0) {
          state.cartItems = state.cartItems.filter(item => item.id !== id);
        }
        state.totalPrice -= price; 
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      localStorage.removeItem('cartItems');
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;
