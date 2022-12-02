import React from "react";
import styles from "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

// COMPACT THE HEADER NAVIGATION BAR INTO A DROPDOWN MENU

const compactHeader = () => {
  const x = document.getElementById("myTopnotch");
  if (x.className === "header_nav") {
    x.className += " responsive";
  } else {
    x.className = "header_nav";
  }
};

function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Planty</h1>
      <div id="header_logo-box" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" id="header_logo" />
      </div>
      <div class="header_nav" id="myTopnotch">
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/ContactPage")}> Contact</a>
        <a id="login-button" onClick={() => navigate("/Login")}>
          Login
        </a>
        {/* eslint-disable-next-line no-script-url */}
        <a
          href="javascript:void(0);"
          class="icon"
          onClick={compactHeader}
          id="hamburger"
        >
          &#9776;
        </a>
      </div>
    </header>
  );
}

export default Header;
/*
        <a id ="login-button"   onClick={() => navigate("/LoginPage")}> Login</a>

*/
