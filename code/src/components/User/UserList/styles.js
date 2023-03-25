import styled from "styled-components";
import { Card } from "../../Ui";

export const StyledCard = styled(Card).attrs((props) => ({
  styles: {
    margin: "2rem auto",
    width: "90%",
    "max-width": "40rem",
  },
}))``;

export const StyledList = styled.ul`
  list-style: none;
  padding: 1rem;

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;
