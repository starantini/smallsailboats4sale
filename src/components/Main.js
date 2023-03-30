import React, { useEffect } from "react";
// import "./Main.css";
import AllCampuses from "./allcampuses/index";
import AllStudents from "./allstudents/index";
import OneCampus from "./singlecampus/index";
import OneStudent from "./singlestudent/index";
import { Link, Route, Routes } from "react-router-dom";
import CreateCampus from "./createCampus";
import CreateStudent from "./createStudent";

const Main = () => {
  return (
    <div>
      <nav>
        <Link to={"/"}>HOME</Link>
        &nbsp;
        <Link to={"/campuses"}>CAMPUSES</Link>
        &nbsp;
        <Link to={"/students"}>STUDENTS</Link>
      </nav>
      <Routes>
        <Route path="/campuses" element={<AllCampuses />}></Route>
        <Route path="/students" element={<AllStudents />}></Route>
        <Route path="/campuses/:campusId/*" element={<OneCampus />}></Route>
        <Route path="/students/:studentId/*" element={<OneStudent />}></Route>
        <Route path="createCampus" element={<CreateCampus />}></Route>
        <Route path="createStudent" element={<CreateStudent />}></Route>
        <Route path="/" element={<AllCampuses />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
