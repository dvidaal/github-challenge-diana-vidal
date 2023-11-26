import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Work Sans', sans serif;
  min-height: 100vh;
  background-color: #fff;
}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  
}

a{
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent
}

h1,
h2 {
  font-size: 3rem;
  margin: 0;
}

`;

export default GlobalStyles;
