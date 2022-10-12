import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F5F5F5;
  }
  *,*::before,*::after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0;
    border: 0;
    margin: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    --webkit-font-smoothing: antialiased;  
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    /* overflow-x: hidden; */
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
`
