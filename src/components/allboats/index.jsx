import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBoats, fetchBoatsAsync, deleteBoatAsync } from "./boatsSlice";
import AuthForm from "../auth/AuthForm";

const AllBoats = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const UserId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const boats = useSelector(selectBoats);
  const myBoats = boats.filter((e) => (e.UserId === UserId ? e : null));
  console.log(myBoats);

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
          <h1>Boats 4 SALE</h1>
          {boats.map((boat) => {
            return (
              <li key={boat.id}>
                <h2>{boat.brand}</h2>
                <img src={boat.imageUrl} />

                <h4>length: {boat.length}</h4>
                <p>price: ${boat.price}</p>
                <p>Contact: {boat.User.email}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllBoats;
