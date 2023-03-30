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

export const editStudentAsync = createAsyncThunk(
  "students/editStudent",
  async ({ studentId, firstName, lastName, email, gpa }) => {
    try {
      const { data } = await axios.put(`/api/students/${studentId}`, {
        firstName,
        lastName,
        email,
        gpa,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const oneStudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOneStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectOneStudent = (state) => state.student;

export default oneStudentSlice.reducer;
