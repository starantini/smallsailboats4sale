import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBoats, deleteBoatAsync } from "../allboats/boatsSlice";

const MyListings = () => {
  const UserId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const boats = useSelector(selectBoats);
  const myBoats = boats.filter((e) => (e.UserId === UserId ? e : null));
  console.log(myBoats);

  const handleDelete = async (boatId) => {
    dispatch(deleteBoatAsync(boatId));
  };

  return (
    <div className="princple">
      <div>
        <h2>your current listings:</h2>
        <ul>
          {myBoats.map((boat) => (
            <li key={boat.id}>
              <h2>{boat.brand}</h2>
              <h4>length: {boat.length}</h4>
              <p>price: ${boat.price}</p>
              <p>Contact: {boat.User.email}</p>
              <button onClick={() => handleDelete(boat.id)}>
                delete listing
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyListings;
