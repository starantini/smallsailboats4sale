import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { selectOneStudent, fetchOneStudentAsync } from "./oneStudentSlice";

const OneStudent = () => {
  const { studentId } = useParams();
  const dispatch = useDispatch();
  const student = useSelector(selectOneStudent);
  const { firstName, lastName, email, imageUrl, gpa, campusId } = student;
  console.log(campusId);
  useEffect(() => {
    dispatch(fetchOneStudentAsync(studentId));
    console.log("fetch Student Async");
  }, [dispatch]);

  return (
    <ul>
      <li key={studentId}>
        <h1>
          {lastName},{firstName}
        </h1>
        <img src={imageUrl} />
        <h2>Contact: {email}</h2>
        <h2>GPA: {gpa}</h2>
        <h2>
          enrolled at:{" "}
          {!campusId ? campusId : "currently not enrolled anywhere"}
        </h2>
      </li>
    </ul>
  );
};

export default OneStudent;
