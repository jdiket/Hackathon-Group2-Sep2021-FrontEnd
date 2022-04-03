import styled from "styled-components";

export const Footer = () => {
  return ( 
    <FooterStyled>
      <p>&copy; {new Date().getFullYear()} Andy Jia Xing Li | Charlie Miller | Jian Chen | John Diket | Richard Williams | Vy Tran | Alexander Franco</p>
    </FooterStyled> 
  );
};

const FooterStyled = styled.div`
  grid-column: 1 / span 14;
  grid-row: 3;
  position: relative;
  background-color:#ECF1F4;
  border-top: 1px solid #0E0E2C;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 15px;
  width: 100%;
`;