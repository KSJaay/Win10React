import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    margin: 0;
    background-color: #282c34;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #21252b;
  }

  ::-webkit-scrollbar-thumb {
    background: #3a3f47;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #414855;
  }
  :root {
    --primary-color: #282c34;
    
    --secondary-color: #21252b;
    --secondary-color-opacity-0: #21252b00;
    --secondary-color-opacity-10: #21252b1a;
    --secondary-color-opacity-20: #21252b33;
    --secondary-color-opacity-30: #21252b4d;
    --secondary-color-opacity-40: #21252b66;
    --secondary-color-opacity-50: #21252b80;
    --secondary-color-opacity-60: #21252b99;
    --secondary-color-opacity-70: #21252bb3;
    --secondary-color-opacity-80: #21252bcc;
    --secondary-color-opacity-90: #21252be6;
    --secondary-color-opacity-100: #21252bff;

    --light-color: #333842;
    
    --font-color: #ffffff;
    --font-light: #aaaaaa;
    
    --highlight-color: #3bce85;
    
    --scroll-primary: #333842;
    --scroll-secondary: #21252b;

    --navbar-hover: #1c1e24;
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
    
    --navbar-hover: #1c1e24;
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

  .react-calendar{
    background-color: #ffffff00;
    border: none;
    color: white;
  }

  button{
    color: white;
  }

  .react-calendar__navigation button:enabled:hover, .react-calendar__navigation button:enabled:focus{
    background-color: var(--secondary-color);
  }

  abbr{
    text-decoration: none;
  }

  .react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus{
    background-color: var(--secondary-color);
  }
`;
