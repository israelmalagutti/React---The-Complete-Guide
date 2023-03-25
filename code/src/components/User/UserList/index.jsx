import React from "react";

import { StyledCard, StyledList } from "./styles";

export const UserList = ({ users }) => {
  return (
    <StyledCard>
      {users && (
        <StyledList>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age}yo)
            </li>
          ))}
        </StyledList>
      )}
    </StyledCard>
  );
};
