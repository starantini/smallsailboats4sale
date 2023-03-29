import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectStudents, fetchStudentsAsync } from "./studentsSlice";

const AllStudents = () => {
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);

  useEffect(() => {
    dispatch(fetchStudentsAsync());
    console.log("fetch Students Async");
  }, [dispatch]);

  return (
    <ul>
      <h1>Students</h1>
      {students.map((student) => {
        return (
          <li key={student.id}>
            <NavLink to={`/students/${student.id}`}>
              <h1>
                {student.lastName},{student.firstName}
              </h1>
            </NavLink>
            <img src={student.imageUrl} />
            <h2>GPA: {student.gpa}</h2>
            <p>Contact: {student.email}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default AllStudents;
