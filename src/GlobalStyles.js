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
  h1:first-child, h2:first-child, h3:first-child, h4:first-child, h5:first-child {
    margin: 14px 0;
  }
`;
