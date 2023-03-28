import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  selectOneCampus,
  fetchOneCampusAsync,
  fetchOneCampusStudentsAsync,
} from "./oneCampusSlice";

const OneCampus = () => {
  const { campusId } = useParams();
  const dispatch = useDispatch();
  const campus = useSelector(selectOneCampus);
  const { data, students } = campus;
  const { name, address, id, imageUrl, description } = data;
  // const students = campus.students;

  // console.log(data);
  // console.log(students);

  useEffect(() => {
    dispatch(fetchOneCampusAsync(campusId));
    // dispatch(fetchOneCampusStudentsAsync(campusId));
    console.log("fetch Campus Async");
  }, [dispatch]);

  // console.log(campus);

  return (
    <ul>
      <li key={id}>
        <h1>{name}</h1>
        <img src={imageUrl} />
        <h2>{address}</h2>
        <p>{description}</p>
        <h3>Students currently Attending :</h3>
        <ul>
          {!students ? (
            students.map((e) => (
              <NavLink to={`/students/${e.id}`}>
                <li>e.name</li>{" "}
              </NavLink>
            ))
          ) : (
            <p> currently no students attending</p>
          )}
        </ul>
      </li>
    </ul>
  );
};

export default OneCampus;
