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

    setCount: (state, action) => {
      state.count = action.payload;
    },

    incrementCartItemQuantity: (state) => {
      state.count += 1;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, incrementCartItemQuantity } =
  cartSlice.actions;
