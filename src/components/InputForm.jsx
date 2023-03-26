import React, { Fragment, useState } from "react";
import "../input.css";

function InputForm() {
  const [userDetails, setuserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    file: "",
    image: "",
    radio: "",
    range: "",
  });

  const handleChange = (e) => {
    setuserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeFile = (e) => {
    setuserDetails({
      ...userDetails,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  };

  return (
    <Fragment>
      <form className="form">
        <h2 className="header">Input Form</h2>

        <br />

        <img className="img" src={userDetails.file} alt="" />
        <br />

        <input
          type="file"
          accept="image/*"
          onChange={handleChangeFile}
          name="file"
          className="fil"
          placeholder="upload and Image"
        />
        <br />

        <input
          type="text"
          placeholder="firstName"
          onChange={handleChange}
          name="firstName"
          value={userDetails.firstName}
          className="name"
        />

        <input
          type="text"
          placeholder="lastName"
          onChange={handleChange}
          name="lastName"
          value={userDetails.lastName}
          className="name2"
        />
        <br />

        <input
          type="email"
          placeholder="email"
          onChange={handleChange}
          name="email"
          value={userDetails.email}
          className="mail"
        />

        <br />

        <input
          type="date"
          onChange={handleChange}
          name="date"
          value={userDetails.date}
          className="dat"
        />
        <br />

        <input
          type="range"
          onChange={handleChange}
          name="range"
          value={userDetails.range}
          className="ran"
        />

        <p>
          {userDetails.image}
          {userDetails.firstName} {userDetails.lastName} <br />
          {userDetails.email} <br />
          {userDetails.date} <br />
          {userDetails.file} <br />
          {userDetails.range} <br />
        </p>
      </form>
    </Fragment>
  );
}

export default InputForm;
