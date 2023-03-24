import styled from "styled-components";

import { Card } from "../../Card";

export const StyledCard = styled(Card).attrs((props) => ({
  styles: {
    position: "fixed",
    top: "30vh",
    left: "10%",
    width: "80%",
    "z-index": "100",
    overflow: "hidden",
  },
}))`
  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const Header = styled.div`
  background: #4f005f;
  padding: 1rem;

  & h2 {
    margin: 0;
    color: white;
  }
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Actions = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;
