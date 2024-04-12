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

    button {
    width: 32.7rem;
    height: 5.3rem;
    border-radius: 0.8rem;
    background: var(--Deep-Violet, #21092f);
    color: var(--White, #fff);
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 4rem;
    cursor: pointer;
    @media screen and (min-width: 1440px) {
      width: 381px;
      height: 53px;
    }
  
  }
`;

export default GlobalStyles;
