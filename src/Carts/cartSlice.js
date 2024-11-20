import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {

    initialCart(state, action) {
      state.cart = action.payload
    },

    addToCart(state, action){
        const item = state.cart.find((item) => item.id === action.payload);
        if (item) {
          item.quantity += 1;
        }
    },

    decrementCart(state, action){
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }

  },
  }
})

// Action creators are generated for each case reducer function
export const { initialCart, addToCart, decrementCart } = CartSlice.actions

export default CartSlice.reducer