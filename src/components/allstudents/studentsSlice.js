import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchStudentsAsync = createAsyncThunk(
  "students/fetchAll",
  async () => {
    const { data } = await axios.get("/api/students");
    return data;
  }
);

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectStudents = (state) => state.students;

export default studentsSlice.reducer;
