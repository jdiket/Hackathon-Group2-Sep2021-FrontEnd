import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (  
    <NotFoundPageStyled>
      <h2>Sorry</h2>
      <p>That page connot be found</p>
      <Link to='/'>Back to the homepage...</Link>
    </NotFoundPageStyled>
  );
};

const NotFoundPageStyled = styled.div`
  min-height: calc(100vh - 7.6rem);
`;