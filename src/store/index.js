import { configureStore } from "@reduxjs/toolkit";
import campusesSlice from "../components/allcampuses/campusesSlice";
import studentsSlice from "../components/allstudents/studentsSlice";

const store = configureStore({
  reducer: {
    campuses: campusesSlice,
    students: studentsSlice,
  },
});

export default store;
