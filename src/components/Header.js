import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Pizzaria Ferreira</h1>
      <nav className="nav">
        <ul>
          <li><a href="#section1">Início</a></li>
          <li><a href="#section2">Menu</a></li>
          <li><a href="#section3">Sobre</a></li>
          <li><a href="#section4">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
