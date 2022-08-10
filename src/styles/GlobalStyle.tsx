import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root {
    height: 100%;
    min-width: 720px;
    min-height: 600px;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.primary.white};
  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    outline: none;
    border: none;
    background: transparent;
  }
`;

export default GlobalStyle;
