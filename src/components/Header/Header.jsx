import React from "react";
import "./Header.scss";
const Header = ({ content }) => {
  return (
    <header>
      <h1>{content}</h1>
    </header>
  );
};

export default Header;
