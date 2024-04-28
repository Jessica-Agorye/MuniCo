import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
    itemCount: 0,
    isLoading: true,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload.id);
    },

    incrementCartItemQuantity: (state, action) => {
      state.cart.itemCount += 1;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, incrementCartItemQuantity } =
  cartSlice.actions;
