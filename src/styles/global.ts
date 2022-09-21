import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('../assets/Roboto_Condensed/RobotoCondensed-Bold.ttf');
    @import url('../assets/Roboto_Condensed/RobotoCondensed-Regular.ttf');
    @import url('../assets/Roboto/Roboto-Bold.ttf');

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
    color: #999999;
  }
`;
