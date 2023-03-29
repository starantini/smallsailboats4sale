import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCampusesAsync = createAsyncThunk(
  "campuses/fetchAll",
  async () => {
    const { data } = await axios.get("/api/campuses");
    return data;
  }
);

// export const sortByStudents = createAsyncThunk("campus/sort", async () => {
//   try {
//     const { data } = await axios.get("/api/campuses/WithStudents");
//     // console.log(data);
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// });

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

export const campusesSlice = createSlice({
  name: "campuses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addCampusAsync.rejected, (state, action) => {
      // console.log(action.payload);
      state.push(action.payload);
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
