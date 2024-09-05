import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth_Slice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});

export default store;
