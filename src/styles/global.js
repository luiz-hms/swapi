import { createGlobalStyle } from "styled-components";
// estilos globais a serem usados em toda a aplicação
export const GlobalStyle = createGlobalStyle`
:root {
    --background: #000000;
    --primary: #ffffff;
    --secondary: #F4D822;
    --hover: #1F154F;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media(max-width: 1200px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }
  body{
    background-color: var(--background);
    --webkit-font-smoothing: atialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body, input, textarea, button {
    //font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
