import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCampusesAsync = createAsyncThunk(
  "campuses/fetchAll",
  async () => {
    const { data } = await axios.get("/api/campuses");
    return data;
  }
);

export const campusesSlice = createSlice({
  name: "campuses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      console.log("action fufilled");
      return action.payload;
    });
    // builder.addCase(fetchCampusesAsync.rejected, (state, action) => {
    //   state.error = action.error;
    // });
  },
});

export const selectCampuses = (state) => state.campuses;

export default campusesSlice.reducer;
