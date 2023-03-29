import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Routes, Route, useParams } from "react-router-dom";
import {
  selectOneCampus,
  fetchOneCampusAsync,
  fetchOneCampusStudentsAsync,
} from "./oneCampusSlice";

const OneCampus = () => {
  const { campusId } = useParams();
  const dispatch = useDispatch();
  const campus = useSelector(selectOneCampus);

  const { name, address, id, imageUrl, description } = campus;

  console.log(campus.students);

  useEffect(() => {
    dispatch(fetchOneCampusAsync(campusId));
    // dispatch(fetchOneCampusStudentsAsync(campusId));
  }, [dispatch]);

  return (
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
              </li>
            ))
          ) : (
            <p>currently no students attending</p>
          )}
        </ul>
      </li>
    </ul>
  );
};

export default OneCampus;
