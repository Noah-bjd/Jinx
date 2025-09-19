// src/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Import Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    @import "tailwindcss";
html, body {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}
  body {
    margin: 0;
    font-family: 'Quattrocento Sans', sans-serif; /* Set Quattrocento Sans as the default font */
    color: #333;
  }

  h1, h2, h3 {
    font-family: 'Quattrocento Sans', sans-serif; /* Use Quattrocento Sans for headings */
    font-weight: 700; /* Bold weight for headings */
  }

  p, a, button {
    font-family: 'Quattrocento Sans', sans-serif; /* Use Quattrocento Sans for paragraphs, links, and buttons */
    font-weight: 400; /* Regular weight */
  }

  a {
    text-decoration: none;
    color: inherit;
  }
::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}


.cursor-trail-wrapper {
  cursor: none; /* Hide default cursor */
}
.cursor-trail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.8));
}



`;

export default GlobalStyles;