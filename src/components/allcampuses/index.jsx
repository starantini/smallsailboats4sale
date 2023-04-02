import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  selectCampuses,
  fetchCampusesAsync,
  deleteCampusAsync,
} from "./campusesSlice";
import CreateCampus from "../createCampus";
import CampusPagination from "../campusesPagination";

const AllCampuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);
  const [sortType, setSortType] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [campusPerPage, setCampusPerPage] = useState(10);

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

  const lastCampusIndex = currentPage * campusPerPage;
  const firstCampusIndex = lastCampusIndex - campusPerPage;
  const currentCampus = [...campuses].slice(firstCampusIndex, lastCampusIndex);

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
            : currentCampus
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
        <CampusPagination
          totalCampuses={campuses.length}
          campusPerPage={campusPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <div className="right">
        <CreateCampus />
      </div>
    </div>
  );
};

export default AllCampuses;
