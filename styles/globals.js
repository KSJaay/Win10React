import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: Moyko;
      src: url("/fonts/Moyko.ttf")
  }
  html {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    user-select:none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select:none;
    -o-user-select:none;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    background-color: var(--primary-color);
    user-select:none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select:none;
    -o-user-select:none;
    max-width: 1920px;
    width: 100%;
    color: var(--font-color);
  };
  :root {
    --primary-color: #282c34;
    --secondary-color: #21252b;
    --light-color: #333842;
    --font-color: #ffffff;
    --font-light: #aaaaaa;
    --highlight-color: #3bce85;
    --scroll-primary: #333842;
    --scroll-secondary: #21252b;
  }
  [data-theme="dark"] {
    --primary-color: #282c34;
    --secondary-color: #21252b;
    --light-color: #333842;
    --font-color: #ffffff;
    --font-light: #aaaaaa;
    --highlight-color: #3bce85;
    --scroll-primary: #333842;
    --scroll-secondary: #21252b;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--scroll-primary);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--scroll-secondary);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--scroll-secondary);
  }
`;
