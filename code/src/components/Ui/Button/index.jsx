import React from "react";

import { StyledButton } from "./styles";

export const Button = ({ children, type, onClick }) => {
  return (
    <StyledButton type={type || "button"} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
