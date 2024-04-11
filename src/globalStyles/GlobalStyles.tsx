import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
  *{
    box-sizing: border-box;
  }
    html{
    
        font-size: 62.5%;
    }
    body{
        margin: 0;
    padding: 0;
      
        background: var(--White, #FFF);
        font-family: "Space Grotesk", sans-serif;
        color: var(--White, #FFF);
    }
  button{
    font-family: "Space Grotesk", sans-serif;
  }
`;

export default GlobalStyles;
