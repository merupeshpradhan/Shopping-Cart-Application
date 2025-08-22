import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/create-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
