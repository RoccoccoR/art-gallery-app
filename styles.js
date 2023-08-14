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
  `;
