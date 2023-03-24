import React from "react";

import { Button, Card } from "../../Ui";

import { StyledForm } from "./styles";

export const AddUserForm = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
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
        <input id="username" type="text" />

        <label htmlFor="age">Age (years)</label>
        <input id="age" type="text" />

        <Button>Add User</Button>
      </StyledForm>
    </Card>
  );
};
