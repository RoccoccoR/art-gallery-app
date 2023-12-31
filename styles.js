import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

:root {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}


a:link,
a:visited {
  color: black; /* You can change this to the desired default link color */
}

a:hover,
a:focus {
  color: blue; /* Change this color to your preferred hover color */
}

/* Style links when they are active (clicked) */
a:active {
  color: red; /* Change this color to your preferred active color */
}

  `;
