import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { selectOneStudent, fetchOneStudentAsync } from "./oneStudentSlice";
import {
  selectOneCampus,
  fetchOneCampusAsync,
  fetchOneCampusStudentsAsync,
} from "../singlecampus/oneCampusSlice";

const OneStudent = () => {
  const { studentId } = useParams();
  const dispatch = useDispatch();
  const student = useSelector(selectOneStudent);
  // const campus = useSelector(selectOneCampus);
  const { firstName, lastName, email, imageUrl, gpa, campusId } = student;
  console.log(student.campus);
  useEffect(() => {
    dispatch(fetchOneStudentAsync(studentId));
    // dispatch(fetchOneCampusAsync(campusId));
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
          enrolled at:
          {student.campus ? (
            <NavLink to={`/campuses/${student.campus.id}`}>
              {student.campus.name}
            </NavLink>
          ) : (
            <p>{"currently not enrolled anywhere"}</p>
          )}
        </h2>
      </li>
    </ul>
  );
};

export default OneStudent;
