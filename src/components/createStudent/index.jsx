import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudentAsync } from "../allstudents/studentsSlice";

const CreateStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudentAsync({ firstName, lastName, email, gpa }));
    setFirstName("");
    setLastName("");
    setEmail("");
    setGpa(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a Student</h1>
      <label htmlFor="firstName">First Name:</label>
      <input
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
      <label htmlFor="lastName">lastName:</label>
      <input
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      ></input>
      <label htmlFor="email">Email:</label>
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label htmlFor="gpa">gpa:</label>
      <input
        name="gpa"
        value={gpa}
        onChange={(e) => setGpa(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default CreateStudent;
