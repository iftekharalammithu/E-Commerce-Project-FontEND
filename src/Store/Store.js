import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth_Slice";
import AdminProductsSlice from "./Admin/Product-slice";
import shoppingCartSlice from "./Shop/Cart";
import shopProductsSlice from "./Shop/Product-slice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    adminProducts: AdminProductsSlice,
    shopCart: shoppingCartSlice,
    shopProducts: shopProductsSlice,
  },
});

export default store;
