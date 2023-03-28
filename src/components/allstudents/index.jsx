import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
            <h1>
              {student.firstName}

              {student.lastName}
            </h1>
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
