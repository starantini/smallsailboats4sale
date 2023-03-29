import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchOneCampusAsync = createAsyncThunk(
  "/campuses/fetchOneCampus",
  async (campusId) => {
    const { data } = await axios.get(`/api/campuses/${campusId}`);
    // console.log(data);
    return data;
  }
);

// export const fetchOneCampusStudentsAsync = createAsyncThunk(
//   "CampusStudentBody",
//   async (id) => {
//     const { data } = await axios.get(`/api/campuses/${id}/students`);
//     return data;
//   }
// );

export const oneCampusSlice = createSlice({
  name: "campus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOneCampusAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    // builder.addCase(fetchOneCampusStudentsAsync.fulfilled, (state, action) => {
    //   state.students = action.payload;
    // });
  },
});

export const selectOneCampus = (state) => state.campus;

export default oneCampusSlice.reducer;
