import React, { useEffect } from "react";

import AllCampuses from "./allcampuses/index";
import AllStudents from "./allstudents/index";
import { Link, Route, Routes } from "react-router-dom";

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
        <Route path="/" element={<AllCampuses />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
