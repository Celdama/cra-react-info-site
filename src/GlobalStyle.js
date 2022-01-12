import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bgBlue: #264653;
    --white: #fff;
    --navDarkColor: #21222a;
    --mainDarkColor: #282d35;
    --lightBlue: #61dafb;
    --factsWhiteColor: #d5e1ee;
  }

  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bgBlue);
  }

  .App {
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
`;
