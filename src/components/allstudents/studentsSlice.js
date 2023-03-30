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

export const addStudentAsync = createAsyncThunk(
  "campuses/addCampus",
  async ({ firstName, lastName, email, gpa }) => {
    const { data } = await axios.post("/api/students", {
      firstName,
      lastName,
      email,
      gpa,
    });
    return data;
  }
);

export const deleteStudentAsync = createAsyncThunk(
  "students/deleteStudent",
  async (studentId) => {
    try {
      const { data } = await axios.delete(`/api/students/${studentId}`);
      return data;
    } catch (error) {
      console.error(error);
    }
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
    builder.addCase(addStudentAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {
      const newState = state.filter(
        (student) => student.id !== action.payload.id
      );
      return newState;
    });
  },
});

export const selectStudents = (state) => state.students;

export default studentsSlice.reducer;
