import React from "react";
import styled from "styled-components"
import { NavBar, Footer } from "../components";
import { InnerLayout } from "./InnerLayout";
import svg from '../images/landing-page-image.svg'

export const MainLayout = ({ children }) => {
  return ( 
    <MainLayoutStyled 
      style={{ 
        backgroundImage: `url(${svg})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}>
      <NavBar />
      <InnerLayout >
        {children}
      </InnerLayout>
      <Footer />
    </MainLayoutStyled>
  );
};

const MainLayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 0 repeat(12, minmax(auto, 1fr)) 0;
  grid-template-rows: 4.8rem auto 2.8rem;
  gap: 0 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 0 repeat(6, 1fr) 0 ;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
  }
`