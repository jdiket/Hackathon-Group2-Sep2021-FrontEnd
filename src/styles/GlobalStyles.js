import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  .title {
    font-weight: 900;
    font-size: 64px;
    letter-spacing: -2%;
  }

  h1 {
    font-weight: 800;
    font-size: 40px;
    letter-spacing: -2%;
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
    letter-spacing: -2%;
  }

  h3 {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -2%;
  }

  .button {
    font-weight: 700;
    font-size: 10px;
    letter-spacing: 3%;
  }

  .link {
    font-weight: 700;
    font-size: 16px;
  }

  .link:hover {
    color: #4B4DED;
  }
`;

export default GlobalStyles