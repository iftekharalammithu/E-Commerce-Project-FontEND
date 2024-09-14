import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth_Slice";
import AdminProductsSlice from "./Admin/Product-slice";
import shoppingCartSlice from "./Shop/Cart";
import shopProductsSlice from "./Shop/Product-slice";
import shopAddressSlice from "./Shop/Address_slice";
import shopOrderSlice from "./Shop/Order-Slice";
import adminOrderSlice from "./Admin/Admin_Order_slice";
import shopSearchSlice from "./Shop/Search_Slice";
import shopReviewSlice from "./Shop/Review_slice";
import commonFeatureSlice from "./Common_Slice";
const store = configureStore({
  reducer: {
    auth: AuthSlice,
    adminProducts: AdminProductsSlice,
    adminOrder: adminOrderSlice,

    shopCart: shoppingCartSlice,
    shopProducts: shopProductsSlice,
    shopAddress: shopAddressSlice,
    shopOrder: shopOrderSlice,
    shopSearch: shopSearchSlice,
    shopReview: shopReviewSlice,
    commonFeature: commonFeatureSlice,
  },
});

export default store;
