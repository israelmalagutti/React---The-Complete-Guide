import React, { useState } from "react";

import { Button, Card, ErrorModal } from "../../Ui";
import { Wrapper } from "../../Helpers";

import { StyledForm } from "./styles";

export const AddUserForm = ({ onAddUser }) => {
  const [enteredUserData, setEnteredUserData] = useState({
    userName: "",
    userAge: "",
  });
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserData.userName.trim().length === 0 ||
      enteredUserData.userAge.trim().length === 0
    ) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    if (+enteredUserData.userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </Wrapper>
  );
};
