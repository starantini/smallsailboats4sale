import { configureStore } from "@reduxjs/toolkit";
import campusesSlice from "../components/allcampuses/campusesSlice";
import studentsSlice from "../components/allstudents/studentsSlice";
import oneCampusSlice from "../components/singlecampus/oneCampusSlice";
import oneStudentSlice from "../components/singlestudent/oneStudentSlice";

const store = configureStore({
  reducer: {
    campuses: campusesSlice,
    students: studentsSlice,
    campus: oneCampusSlice,
    student: oneStudentSlice,
  },
});

export default store;
