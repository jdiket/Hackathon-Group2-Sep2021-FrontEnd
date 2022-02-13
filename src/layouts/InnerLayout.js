import React from "react";
import styled from "styled-components";

export const InnerLayout = ({ children }) => {
  return ( 
    <InnerLayoutStyled>
      {children}
    </InnerLayoutStyled>
  );
}

const InnerLayoutStyled = styled.div`
  grid-column: 2 / span 12;
  grid-row-start: 2;
  background-color: transparent;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;