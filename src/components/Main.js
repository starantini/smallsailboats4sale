import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

import AllCampuses from "./allcampuses/index";
import AllStudents from "./allstudents/index";
import OneCampus from "./singlecampus/index";
import OneStudent from "./singlestudent/index";
import CreateCampus from "./createCampus";
import CreateStudent from "./createStudent";
import EditCampus from "./editCampus";
import EditStudent from "./editStudent";
import PageNotFound from "./notFoundPage";
import HomePage from "./homepage";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  return (
    <div>
      <nav>
        <Link to={"/"}>HOME</Link>
        <Link to={"/campuses"}>CAMPUSES</Link>
        <Link to={"/students"}>STUDENTS</Link>
      </nav>
      <nav className="staticBar">
        <h5>
          {location.hostname}
          {location.pathname}
        </h5>
      </nav>
      <Routes>
        <Route path="/campuses" element={<AllCampuses />}></Route>
        <Route path="/students" element={<AllStudents />}></Route>
        <Route path="/campuses/:campusId/*" element={<OneCampus />}></Route>
        <Route path="/students/:studentId/*" element={<OneStudent />}></Route>
        <Route path="createCampus" element={<CreateCampus />}></Route>
        <Route path="createStudent" element={<CreateStudent />}></Route>
        <Route path="editCampus" element={<EditCampus />}></Route>
        <Route path="editStudent" element={<EditStudent />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
