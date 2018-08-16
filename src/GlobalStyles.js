import { injectGlobal } from "styled-components";

export const GlobalStyles = injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  body {
    background-color: #eeeeee;
    font-family: 'Roboto', sans-serif;
  }
`;
