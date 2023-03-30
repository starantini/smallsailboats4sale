import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Routes, Route, useParams } from "react-router-dom";
import {
  selectOneCampus,
  fetchOneCampusAsync,
  editCampusStudentBodyAsync,
} from "./oneCampusSlice";
import EditCampus from "../editCampus";
import PageNotFound from "../notFoundPage";

const OneCampus = () => {
  const { campusId } = useParams();
  const dispatch = useDispatch();
  const campus = useSelector(selectOneCampus);

  const { name, address, id, imageUrl, description } = campus;

  useEffect(() => {
    dispatch(fetchOneCampusAsync(campusId));
  }, [dispatch]);

  const handleUnregister = (studentId) => {
    const campusId = null;
    dispatch(editCampusStudentBodyAsync({ studentId, campusId }));
  };

  return (
    <div className="princple">
      <div className="left">
        <ul>
          <li key={id}>
            <h1>{name}</h1>
            <img src={imageUrl} />
            <h2>{address}</h2>
            <p>{description}</p>
            <h3>Students currently Attending :</h3>
            <ul>
              {campus.students && campus.students.length ? (
                campus.students.map((e) => (
                  <li key={e.id}>
                    <NavLink to={`/students/${e.id}`}>
                      {e.lastName},{e.firstName}
                    </NavLink>
                    {console.log(e.campusId)}
                    <button onClick={() => handleUnregister(e.id)}>
                      Unregister
                    </button>
                  </li>
                ))
              ) : (
                <p>currently no students attending</p>
              )}
            </ul>
          </li>
        </ul>
      </div>
      <div className="right">
        <EditCampus />
      </div>
    </div>
  );
};

export default OneCampus;
