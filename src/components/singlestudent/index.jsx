import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { selectOneStudent, fetchOneStudentAsync } from "./oneStudentSlice";
import EditStudent from "../editStudent";

const OneStudent = () => {
  const { studentId } = useParams();
  const dispatch = useDispatch();
  const student = useSelector(selectOneStudent);

  useEffect(() => {
    dispatch(fetchOneStudentAsync(studentId));
  }, [dispatch]);

  return (
    <div className="princple">
      <div className="left">
        <ul>
          {student ? (
            <li key={student.id}>
              <h1>
                {student.lastName},{student.firstName}
              </h1>
              <img src={student.imageUrl} />
              <h2>Contact: {student.email}</h2>
              <h2>GPA: {student.gpa}</h2>
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
          ) : (
            <h1>Sorry, but this Student doesn't exist</h1>
          )}
        </ul>
      </div>
      <div className="right">
        <EditStudent />
      </div>
    </div>
  );
};

export default OneStudent;
