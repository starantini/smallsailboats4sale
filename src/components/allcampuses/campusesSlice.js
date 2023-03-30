import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCampusesAsync = createAsyncThunk(
  "campuses/fetchAll",
  async () => {
    const { data } = await axios.get("/api/campuses");
    return data;
  }
);

export const addCampusAsync = createAsyncThunk(
  "campuses/addCampus",
  async ({ name, address, description }) => {
    const { data } = await axios.post("/api/campuses", {
      name,
      address,
      description,
    });
    console.log(data);
    return data;
  }
);

export const deleteCampusAsync = createAsyncThunk(
  "campuses/deleteCampus",
  async (campusId) => {
    try {
      const { data } = await axios.delete(`/api/campuses/${campusId}`);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const campusesSlice = createSlice({
  name: "campuses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addCampusAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      const newState = state.filter(
        (campus) => campus.id !== action.payload.id
      );
      console.log(newState);
      return newState;
    });
  },
});

export const selectCampuses = (state) => state.campuses;

export default campusesSlice.reducer;

// export const sortByStudents = createAsyncThunk("campus/sort", async () => {
//   try {
//     const { data } = await axios.get("/api/campuses/withStudents");
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// });

// export const filteredCampuses = createAsyncThunk(
//   "campuses/filtered",
//   async () => {
//     try {
//       const { data } = await axios.get(`api/campuses/withStudents`);
//       return data;
//     } catch (err) {
//       console.error(err.message);
//     }
//   }
// );
