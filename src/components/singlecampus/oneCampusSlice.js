import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
  students: [],
};

export const fetchOneCampusAsync = createAsyncThunk(
  "/campuses/fetchOneCampus",
  async (campusId) => {
    const { data } = await axios.get(`/api/campuses/${campusId}`);
    // console.log(data);
    return data;
  }
);
export const fetchOneCampusStudentsAsync = createAsyncThunk(
  "CampusStudentBody",
  async (id) => {
    const { data } = await axios.get(`/api/campuses/${id}/students`);
    // console.log(data);
    return data;
  }
);

export const oneCampusSlice = createSlice({
  name: "campus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOneCampusAsync.fulfilled, (state, action) => {
      console.log("Single Campus action fufilled");
      // console.log(data);
      state.data = action.payload;
    });
    builder.addCase(fetchOneCampusStudentsAsync.fulfilled, (state, action) => {
      console.log("Student body from specified campus");
      // console.log(data);
      state.students = action.payload;
    });
  },
});

export const selectOneCampus = (state) => state.campus;

export default oneCampusSlice.reducer;
