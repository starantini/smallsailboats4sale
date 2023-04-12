import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchBoatsAsync = createAsyncThunk("boats/fetchAll", async () => {
  const { data } = await axios.get("/api/boats");

  return data;
});

// export const addBoatAsync = createAsyncThunk(
//   "boats/addCampus",
//   async ({ firstName, lastName, email, gpa }) => {
//     const { data } = await axios.post("/api/boats", {
//       firstName,
//       lastName,
//       email,
//       gpa,
//     });
//     return data;
//   }
// );

export const deleteBoatAsync = createAsyncThunk(
  "boats/deleteboat",
  async (boatId) => {
    try {
      const { data } = await axios.delete(`/api/boats/${boatId}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const boatsSlice = createSlice({
  name: "boats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoatsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    // builder.addCase(addBoatAsync.fulfilled, (state, action) => {
    //   state.push(action.payload);
    // });
    builder.addCase(deleteBoatAsync.fulfilled, (state, action) => {
      const newState = state.filter((boat) => boat.id !== action.payload.id);
      return newState;
    });
  },
});

export const selectBoats = (state) => state.boats;

export default boatsSlice.reducer;
