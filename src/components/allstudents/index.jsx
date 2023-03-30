import React, { useEffect } from "react";
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
          {students.map((student) => {
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
