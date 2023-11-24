import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Work Sans', sans serif;
  min-height: 100vh;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent
}

h1,
h2 {
  font-size: 30px;
  margin: 0;
}

`;

export default GlobalStyles;
