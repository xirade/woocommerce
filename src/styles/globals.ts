import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Raleway';
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
