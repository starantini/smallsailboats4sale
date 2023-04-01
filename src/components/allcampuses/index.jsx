import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  selectCampuses,
  fetchCampusesAsync,
  deleteCampusAsync,
} from "./campusesSlice";
import CreateCampus from "../createCampus";

const AllCampuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);

  // console.log(campuses.map((e) => e.students));

  const [sortType, setSortType] = useState("");

  useEffect(() => {
    dispatch(fetchCampusesAsync());
  }, [dispatch]);

  const handleDelete = async (campusId) => {
    dispatch(deleteCampusAsync(campusId));
  };

  const largestStudentBody = () => {
    const mostStudents = [...campuses].sort((a, b) =>
      a.students && b.students ? b.students.length - a.students.length : null
    );
    return mostStudents;
  };

  const emptyCampus = () => {
    const emptyCampus = [...campuses].filter((e) =>
      e.students && e.students.length === 0 ? e : console.log("not working")
    );
    return emptyCampus;
  };

  return (
    <div className="princple">
      <div className="left">
        <ul>
          <h1>Campuses</h1>
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value={""}>sort</option>
            <option value={"moststudents"}>MostStudents</option>
            <option value={"nostudents"}>0 Students</option>
          </select>
          {(sortType === "moststudents"
            ? largestStudentBody()
            : sortType === "nostudents"
            ? emptyCampus()
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
