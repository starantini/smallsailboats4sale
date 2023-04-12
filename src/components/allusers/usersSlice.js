import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchUsersAsync = createAsyncThunk("users/fetchAll", async () => {
  const { data } = await axios.get("/api/users");
  return data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
