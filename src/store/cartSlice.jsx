import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
    count: 1,

    isLoading: true,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    incrementCartItemQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        item.count = (item.count || 1) + 1;
      }
    },
  },
});
export default cartSlice.reducer;
export const { addToCart, removeFromCart, incrementCartItemQuantity } =
  cartSlice.actions;
