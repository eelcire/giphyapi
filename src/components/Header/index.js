import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header(props) {
  return (
    <header>
      <div className="main">
        <main>Daddy's Assignment</main>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}

export default Header;
