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

  const [sortType, setSortType] = useState("");

  useEffect(() => {
    dispatch(fetchCampusesAsync());
    console.log("fetch Campuses Async");
  }, [dispatch]);

  const handleDelete = async (campusId) => {
    dispatch(deleteCampusAsync(campusId));
  };
  const largestStudentBody = [...campuses].sort(
    (a, b) => b.students.length - a.students.length
  );

  const emptyCampus = [...campuses].filter((e) =>
    e.students.length === 0 ? e : null
  );

  console.log(emptyCampus);

  return (
    <div className="princple">
      <div className="left">
        <h1>Campuses</h1>
        <ul>
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value>sort</option>
            <option value={"moststudents"}>MostStudents</option>
            <option value={"nostudents"}>0 Students</option>
          </select>
          {(sortType === "moststudents"
            ? largestStudentBody
            : sortType === "nostudents"
            ? emptyCampus
            : campuses
          ).map((campus) => {
            return (
              <li key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                  <h1>{campus.name}</h1>
                  <img src={campus.imageUrl} />
                </NavLink>
                <h2>Address: {campus.address}</h2>
                <p>Description: {campus.description}</p>
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
