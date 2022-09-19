import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-widget: 1080px) {
      font-size: 93.75%
    }

    @media (max-widget: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input,textarea,button{
    font-family: 'Roboto', san-serif;
    font-weight: 400;
  }

  li {
      list-style-type: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    outline: none;
  }

  svg {
    height: 28px;
    width: 28px;
    color: #999;
  }
`;