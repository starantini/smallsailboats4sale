import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchOneStudentAsync = createAsyncThunk(
  "/Studentes/fetchOneStudent",
  async (studentId) => {
    const { data } = await axios.get(`/api/students/${studentId}`);
    // console.log(data);
    return data;
  }
);
// export const fetchOneStudentAsync = createAsyncThunk(
//   "StudentStudentBody",
//   async (id) => {
//     const { data } = await axios.get(`/api/Studentes/${id}/students`);
//     // console.log(data);
//     return data;
//   }
// );

export const oneStudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOneStudentAsync.fulfilled, (state, action) => {
      console.log("Single Student action fufilled");
      // console.log(data);
      return action.payload;
    });
    // builder.addCase(fetchOneStudentStudentsAsync.fulfilled, (state, action) => {
    //   console.log("Student body from specified Student");
    //   // console.log(data);
    //   state.students = action.payload;
    // });
  },
});

export const selectOneStudent = (state) => state.student;

export default oneStudentSlice.reducer;
