import React from "react";

import { Card } from "../../Ui";

import { StyledList } from "./styles";

export const UserList = ({ users }) => {
  return (
    <Card
      styles={{
        margin: "2rem auto",
        width: "90%",
        "max-width": "40rem",
      }}
    >
      <StyledList>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}yo)
          </li>
        ))}
      </StyledList>
    </Card>
  );
};
