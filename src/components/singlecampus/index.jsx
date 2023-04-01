import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  selectOneCampus,
  fetchOneCampusAsync,
  editCampusStudentBodyAsync,
} from "./oneCampusSlice";
import EditCampus from "../editCampus";

const OneCampus = () => {
  const { campusId } = useParams();

  const dispatch = useDispatch();

  const campus = useSelector(selectOneCampus);

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
          {campus ? (
            <li key={campus.id}>
              <h1>{campus.name}</h1>
              <img src={campus.imageUrl} />
              <h2>{campus.address}</h2>
              <p>{campus.description}</p>
              <h3>Students currently Attending :</h3>
              <ul>
                {campus.students && campus.students.length ? (
                  campus.students.map((e) => (
                    <li key={e.id}>
                      <NavLink to={`/students/${e.id}`}>
                        {e.lastName},{e.firstName}
                      </NavLink>
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
          ) : (
            <h1>Sorry, but this Campus doesn't exist</h1>
          )}
        </ul>
      </div>
      <div className="right">
        <EditCampus />
      </div>
    </div>
  );
};

export default OneCampus;
