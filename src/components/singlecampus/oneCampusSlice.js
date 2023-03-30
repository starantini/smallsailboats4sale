import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchOneCampusAsync = createAsyncThunk(
  "/campuses/fetchOneCampus",
  async (campusId) => {
    const { data } = await axios.get(`/api/campuses/${campusId}`);
    return data;
  }
);
export const editCampusAsync = createAsyncThunk(
  "campuses/editCampus",
  async ({ campusId, name, address, description }) => {
    try {
      const { data } = await axios.put(`/api/campuses/${campusId}`, {
        name,
        address,
        description,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const editCampusStudentBodyAsync = createAsyncThunk(
  "campuses/editCampusStudentBody",
  async ({ studentId, campusId }) => {
    console.log(studentId, campusId);
    try {
      const { data } = await axios.put(`/api/students/${studentId}`, {
        campusId,
      });
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const oneCampusSlice = createSlice({
  name: "campus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOneCampusAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editCampusAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editCampusStudentBodyAsync.fulfilled, (state, action) => {
      // console.log(action.payload);
      return action.payload;
    });
  },
});

export const selectOneCampus = (state) => state.campus;

export default oneCampusSlice.reducer;
