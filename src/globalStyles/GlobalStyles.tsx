import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
  
    html{
        margin: 0;
    padding: 0;
    box-sizing: border-box;
        font-size: 62.5%;
    }
    body{
        background: var(--White, #FFF);
        font-family: "Space Grotesk", sans-serif;
    }
  button{
    font-family: "Space Grotesk", sans-serif;
  }
`;

export default GlobalStyles;
