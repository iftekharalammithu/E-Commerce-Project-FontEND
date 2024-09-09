import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth_Slice";
import AdminProductsSlice from "./Admin/Product-slice";
import shoppingCartSlice from "./Shop/Cart";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    adminProducts: AdminProductsSlice,
    shopCart: shoppingCartSlice,
  },
});

export default store;
