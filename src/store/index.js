import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../components/allusers/usersSlice";
import boatsSlice from "../components/allboats/boatsSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
    boats: boatsSlice,
  },
});

export default store;
