import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectCampuses, fetchCampusesAsync } from "./campusesSlice";
import CreateCampus from "../createCampus";

const AllCampuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);

  useEffect(() => {
    dispatch(fetchCampusesAsync());
    console.log("fetch Campuses Async");
  }, [dispatch]);

  return (
    <div>
      <div>
        <ul>
          <h1>Campuses</h1>
          {campuses.map((campus) => {
            return (
              <li key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                  <h1>{campus.name}</h1>
                </NavLink>
                <img src={campus.imageUrl} />
                <h2>{campus.address}</h2>
                <p>{campus.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <CreateCampus />
      </div>
    </div>
  );
};

export default AllCampuses;
