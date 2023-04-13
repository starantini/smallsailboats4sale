import React from "react";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AllUsers from "./allusers/index";
import AllBoats from "./allboats/index";
import HomePage from "./homepage";
import AuthForm from "./auth/AuthForm";
import CreateBoat from "./createBoat";
import { logout } from "../store";
import MyListings from "./myListing";

const Main = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userName = useSelector((state) => state.auth.me.username);
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/");
  };
  // console.log(isLoggedIn);
  return (
    <div>
      <nav>
        <Link to={"/"}>HOME</Link>
        <Link to={"/boats"}>BOATS4SALE</Link>
        {isLoggedIn ? (
          ((<Link to={"/mylistings"}>my Listings</Link>),
          (
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          ))
        ) : (
          <Link to={"/signup"}>signup</Link>
        )}
      </nav>
      <nav className="staticBar">
        {isLoggedIn ? (
          <h5>Welcome {userName}</h5>
        ) : (
          <h5>
            Welcome to SmallSailBoats4Sale sign up for free to list your boat
            for sale
          </h5>
        )}
      </nav>
      {isLoggedIn ? (
        <div className="topuserbar">
          <div className="left">
            <CreateBoat />
          </div>
          <div className="right">
            <MyListings />
          </div>
        </div>
      ) : location.pathname === "/signup" ? null : (
        <AuthForm name="login" displayName="Login" />
      )}
      <Routes>
        <Route path="/users" element={<AllUsers />}></Route>
        <Route path="/boats" element={<AllBoats />}></Route>
        <Route path="/" element={<AllBoats />}></Route>
        <Route path="/mylistings" element={<MyListings />}></Route>
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
