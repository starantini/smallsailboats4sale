import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCampusAsync } from "../allcampuses/campusesSlice";

const CreateCampus = () => {
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addCampusAsync({ id, name, address }));
    setName("");
    setAdress("");
  };

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="id">Id:</label>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
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
        onChange={(e) => setAdress(e.target.value)}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateCampus;
