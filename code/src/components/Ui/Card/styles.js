import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;

  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}
`;
