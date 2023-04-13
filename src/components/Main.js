import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import AllUsers from "./allusers/index";
import AllBoats from "./allboats/index";
import HomePage from "./homepage";
import AuthForm from "./auth/AuthForm";

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
        <Route
          path="/*"
          element={<AuthForm name="login" displayName="Login" />}
        />
        <Route
          path="/login"
          element={<AuthForm name="login" displayName="Login" />}
        />
        <Route
          path="/signup"
          element={<AuthForm name="signup" displayName="Sign Up" />}
        />
      </Routes>
    </div>
  );
};

export default Main;
