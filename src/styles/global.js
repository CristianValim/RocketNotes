import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing : antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    :root {
      font-size        : 62.5%;
    }
    
    body {
      color: ${({theme}) => theme.COLORS.WHITE};
      background: ${({theme}) => theme.COLORS.BACKGROUND_800};
      height: 100%;
      font-size: 3rem;
    }
    
    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;