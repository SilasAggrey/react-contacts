import React, { useState } from "react";
import {v4 as uuid } from "uuid";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenChange = (event) => {
        setGen(event.target.value);
    }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: uuid(),
      name: name,
      email: email,
      gen: gen,
    };

    props.addUser(newUser);

    setName("");
    setEmail("");
    setGen("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Full name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        name="PhoneNumber"
        type="number"
        placeholder="PhoneNumber"
        value={email}
        onChange={handleEmailChange}
        />

        <input
        name="location"
        type="text"
        placeholder="Location"
        value={gen}
        onChange={handleGenChange}

      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UserForm;
