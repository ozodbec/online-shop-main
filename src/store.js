import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"; // path to'g'ri ekanligini tekshiring

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
