import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editCampusAsync } from "../singlecampus/oneCampusSlice";

const EditCampus = () => {
  const { campusId } = useParams();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editCampusAsync({ campusId, name, address, description }));
    setName("");
    setAddress("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit a Campus</h1>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label htmlFor="address">Address:</label>
      <input
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></input>
      <label htmlFor="description">Description:</label>
      <input
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button type="submit">Edit</button>
    </form>
  );
};

export default EditCampus;
