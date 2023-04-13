import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoatAsync } from "../allboats/boatsSlice";

const CreateBoat = () => {
  const UserId = useSelector((state) => state.auth.me.id);
  // console.log(userid);
  const [brand, setBrand] = useState("");
  const [length, setLength] = useState(Number);
  const [price, setPrice] = useState(Number);
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoatAsync({ brand, length, price, UserId }));
    setBrand("");
    setLength("");
    setPrice("");
  };
  const requiredField = () => {
    if (brand.length === 0) {
      return <p style={{ color: "red" }}>*brand field is required</p>;
    }
    if (length.length === 0) {
      return <p style={{ color: "red" }}>*length field is required</p>;
    }
    if (price.length === 0) {
      return <p style={{ color: "red" }}>*price field is required</p>;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a Boat Listing</h1>
      <label htmlFor="brand">Brand:</label>
      <input
        name="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      ></input>
      <label htmlFor="length">length:</label>
      <input
        name="length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      ></input>
      <label htmlFor="price">price:</label>
      <input
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>

      {toggle ? requiredField() : null}
      <button onClick={() => setToggle(true)} type="submit">
        Add
      </button>
    </form>
  );
};

export default CreateBoat;
