import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchOneStudentAsync = createAsyncThunk(
  "/Studentes/fetchOneStudent",
  async (studentId) => {
    const { data } = await axios.get(`/api/students/${studentId}`);

    return data;
  }
);
// export const fetchOneStudentCampusAsync = createAsyncThunk(
//   "Campusenrolledat",
//   async (id) => {
//     const { data } = await axios.get(`/api/Studentes/${id}/campus`);
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
      // console.log("Single Student action fufilled");
      // console.log(action.payload);
      return action.payload;
    });
    // builder.addCase(fetchOneCampusAsync.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   state.campus = action.payload;
    // });
  },
});

export const selectOneStudent = (state) => state.student;

export default oneStudentSlice.reducer;
