import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import CreateStudent from "../createStudent";
import {
  selectStudents,
  fetchStudentsAsync,
  deleteStudentAsync,
} from "./studentsSlice";

const AllStudents = () => {
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);
  const [sortType, setSortType] = useState("");

  const studentsSortedId = [...students].sort((a, b) => a.id - b.id);
  const studentsSortedLastname = [...students].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );
  const studentsSortedGpa = [...students].sort((a, b) => a.gpa - b.gpa);

  const unregisteredStudents = [...students].filter((e) =>
    e.campusId === null ? e : null
  );

  useEffect(() => {
    dispatch(fetchStudentsAsync());
    console.log("fetch Students Async");
  }, [dispatch]);

  const handleDelete = async (studentId) => {
    dispatch(deleteStudentAsync(studentId));
  };

  return (
    <div className="princple">
      <div className="left">
        <ul>
          <h1>Students</h1>
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value>sort</option>
            <option value={"lastName"}>lastname</option>
            <option value={"gpa"}>Gpa</option>
            <option value={"unregistered"}>unregistered</option>
          </select>
          {(sortType === "gpa"
            ? studentsSortedGpa
            : sortType === "lastName"
            ? studentsSortedLastname
            : sortType === "unregistered"
            ? unregisteredStudents
            : studentsSortedId
          ).map((student) => {
            return (
              <li key={student.id}>
                <NavLink to={`/students/${student.id}`}>
                  <h2>
                    {student.lastName},{student.firstName}
                  </h2>
                  <img src={student.imageUrl} />
                </NavLink>
                <h4>GPA: {student.gpa}</h4>
                <p>Contact: {student.email}</p>
                <button onClick={() => handleDelete(student.id)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">
        <CreateStudent />
      </div>
    </div>
  );
};

export default AllStudents;
