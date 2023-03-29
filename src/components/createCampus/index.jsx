import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCampusAsync } from "../allcampuses/campusesSlice";

const CreateCampus = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCampusAsync({ name, address, description }));
    setName("");
    setAddress("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a Campus</h1>
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
      <button type="submit">Add</button>
    </form>
  );
};

export default CreateCampus;
