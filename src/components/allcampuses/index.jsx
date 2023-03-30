import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  selectCampuses,
  fetchCampusesAsync,
  deleteCampusAsync,
} from "./campusesSlice";
import CreateCampus from "../createCampus";

const AllCampuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);
  // const campusId = useParams();
  // const [deleteId, setDeleteId] = useState(null);
  // console.log(deleteId);

  useEffect(() => {
    dispatch(fetchCampusesAsync());
    console.log("fetch Campuses Async");
  }, [dispatch]);

  const handleDelete = async (campusId) => {
    console.log(typeof campusId);
    console.log(dispatch(deleteCampusAsync(campusId)));
  };

  return (
    <div className="princple">
      <div className="left">
        <h1>Campuses</h1>
        <ul>
          {campuses.map((campus) => {
            return (
              <li key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                  <h1>{campus.name}</h1>
                </NavLink>
                <img src={campus.imageUrl} />
                <h2>{campus.address}</h2>
                <p>{campus.description}</p>
                {console.log(campus.id)}
                <button onClick={() => handleDelete(campus.id)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">
        <CreateCampus />
      </div>
    </div>
  );
};

export default AllCampuses;
