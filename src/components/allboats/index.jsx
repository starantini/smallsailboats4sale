import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBoats, fetchBoatsAsync, deleteBoatAsync } from "./boatsSlice";

const AllBoats = () => {
  const dispatch = useDispatch();
  const boats = useSelector(selectBoats);
  console.log(boats);

  useEffect(() => {
    dispatch(fetchBoatsAsync());
    console.log("fetch Boats Async");
  }, [dispatch]);

  const handleDelete = async (boatId) => {
    dispatch(deleteBoatAsync(boatId));
  };

  return (
    <div className="princple">
      <div className="left">
        <ul>
          <h1>Boats</h1>
          {boats.map((boat) => {
            return (
              <li key={boat.id}>
                <h2>{boat.brand}</h2>
                <img src={boat.imageUrl} />

                <h4>length: {boat.length}</h4>
                <p>price: ${boat.price}</p>
                <p>Contact: {boat.User.email}</p>
                <button onClick={() => handleDelete(boat.id)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllBoats;
