import React, { useState, useRef } from "react";

import { Button, Card, ErrorModal } from "../../Ui";
import { Wrapper } from "../../Helpers";

import { StyledForm } from "./styles";

export const AddUserForm = ({ onAddUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredAge = ageInputRef.current.value;
    const enteredName = nameInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const userData = {
      name: enteredName,
      age: enteredAge,
    };

    onAddUser(userData);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
          <input id="username" type="text" ref={nameInputRef} />

          <label htmlFor="age">Age (years)</label>
          <input id="age" type="text" ref={ageInputRef} />

          <Button type="sumbit">Add User</Button>
        </StyledForm>
      </Card>
    </Wrapper>
  );
};
