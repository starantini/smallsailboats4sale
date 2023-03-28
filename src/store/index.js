import { configureStore } from "@reduxjs/toolkit";
import campusesSlice from "../components/allcampuses/campusesSlice";
import studentsSlice from "../components/allstudents/studentsSlice";
import oneCampusSlice from "../components/singlecampus/oneCampusSlice";

const store = configureStore({
  reducer: {
    campuses: campusesSlice,
    students: studentsSlice,
    campus: oneCampusSlice,
  },
});

export default store;
