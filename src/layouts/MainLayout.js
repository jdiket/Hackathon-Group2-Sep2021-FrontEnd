import React from "react";
import styled from "styled-components"
import { NavBar } from "../components";
import { InnerLayout } from "./InnerLayout";

export const MainLayout = ({ children }) => {
  return ( 
    <MainLayoutStyled>
      <NavBar />
      <InnerLayout >
        {children}
      </InnerLayout>
    </MainLayoutStyled>
  );
};

const MainLayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 0 repeat(12, minmax(auto, 1fr)) 0;
  grid-template-rows: 4.8rem auto;
  gap: 0 2rem;
  background-image: url("../images/landing-page-image.svg");
  background-size: cover;
  background-position: center;
  min-width: 320px;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 0 repeat(6, 1fr) 0 ;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
  }
`