import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth_Slice";
import AdminProductsSlice from "./Admin/Product-slice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    adminProducts: AdminProductsSlice,
  },
});

export default store;
