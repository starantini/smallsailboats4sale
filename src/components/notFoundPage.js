import React from "react";
import { useLocation } from "react-router-dom";

const PageNotFound = () => {
  const location = useLocation();
  return <h1>Sorry, but {location.pathname} page does not exist</h1>;
};

export default PageNotFound;
