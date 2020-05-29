import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
body{
  background-color:${(props) =>
    props.theme.mode === "dark" ? "#111" : "#EEE"};
  color:${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")};
}


`;

export default GlobalStyles;
