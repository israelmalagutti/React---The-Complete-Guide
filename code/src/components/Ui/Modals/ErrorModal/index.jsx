import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../../Button";

import { Actions, Backdrop, Content, Header, StyledCard } from "./styles";

const STANDARD_ERROR_TITLE = "Invalid input";
const STANDARD_ERROR_MESSAGE = "An error has occoured, please try again later";

const ModalOverLay = ({
  title = STANDARD_ERROR_TITLE,
  message = STANDARD_ERROR_MESSAGE,
  onConfirm,
}) => {
  return (
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
  );
};

export const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onClick={onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverLay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};
