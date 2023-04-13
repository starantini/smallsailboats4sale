import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../components/allusers/usersSlice";
import boatsSlice from "../components/allboats/boatsSlice";
import authReducer from "../components/auth/authSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
    boats: boatsSlice,
    auth: authReducer,
  },
});

export default store;
export * from "../components/auth/authSlice";
