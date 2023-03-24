import React from "react";

import { StyledCard } from "./styles";

export const Card = ({ children, styles }) => {
  return <StyledCard styles={styles}>{children}</StyledCard>;
};
