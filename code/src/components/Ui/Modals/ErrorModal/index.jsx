import React from "react";
import { Button } from "../../Button";

import { Actions, Backdrop, Content, Header, StyledCard } from "./styles";

const STANDARD_ERROR_TITLE = "Invalid input";
const STANDARD_ERROR_MESSAGE = "An error has occoured, please try again later";

export const ErrorModal = ({
  title = STANDARD_ERROR_TITLE,
  message = STANDARD_ERROR_MESSAGE,
  onConfirm,
}) => {
  return (
    <div>
      <Backdrop onClick={onConfirm} />
      <StyledCard>
        <Header>
          <h2>{title}</h2>
        </Header>

        <Content>
          <p>{message}</p>
        </Content>

        <Actions>
          <Button onClick={onConfirm}>Okay</Button>
        </Actions>
      </StyledCard>
    </div>
  );
};
