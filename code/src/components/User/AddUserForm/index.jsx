import React, { useState } from "react";

import { Button, Card } from "../../Ui";

import { StyledForm } from "./styles";

export const AddUserForm = ({ onAddUser }) => {
  const [enteredUserData, setEnteredUserData] = useState({
    userName: "",
    userAge: "",
  });

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserData.userName.trim().length === 0 ||
      enteredUserData.userAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserData.userAge < 1) {
      return;
    }

    const userData = {
      name: enteredUserData.userName,
      age: enteredUserData.userAge,
    };

    onAddUser(userData);

    setEnteredUserData({
      userAge: "",
      userName: "",
    });
  };

  const usernameChandleHandler = (event) => {
    setEnteredUserData((prevState) => ({
      ...prevState,
      userName: event.target.value,
    }));
  };

  const ageChandleHandler = (event) => {
    setEnteredUserData((prevState) => ({
      ...prevState,
      userAge: event.target.value,
    }));
  };

  return (
    <Card
      styles={{
        margin: "2rem auto",
        padding: "1rem",
        width: "90%",
        "max-width": "40rem",
      }}
    >
      <StyledForm onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={enteredUserData.userName}
          type="text"
          onChange={usernameChandleHandler}
        />

        <label htmlFor="age">Age (years)</label>
        <input
          id="age"
          value={enteredUserData.userAge}
          type="text"
          onChange={ageChandleHandler}
        />

        <Button type="sumbit">Add User</Button>
      </StyledForm>
    </Card>
  );
};
