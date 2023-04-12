import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import AllUsers from "./allusers/index";
import AllBoats from "./allboats/index";
import HomePage from "./homepage";

const Main = () => {
  const location = useLocation();
  return (
    <div>
      <nav>
        <Link to={"/"}>HOME</Link>
        <Link to={"/users"}>users</Link>
        <Link to={"/boats"}>Boats</Link>
      </nav>
      <nav className="staticBar">
        <h5>
          {location.hostname}
          {location.pathname}
        </h5>
      </nav>
      <Routes>
        <Route path="/users" element={<AllUsers />}></Route>
        <Route path="/boats" element={<AllBoats />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
