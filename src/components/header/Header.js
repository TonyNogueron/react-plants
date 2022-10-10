import React from "react";
import styles from "./Header.css";

import logo from "../../images/logo.png";


// COMPACT THE HEADER NAVIGATION BAR INTO A DROPDOWN MENU

const compactHeader = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Planty</h1>
      <div id="header_logo-box">
        <img src={logo} alt="Logo" id="header_logo" />
      </div>
      <div class = "header_nav" id = "myTopnav">
        <a> About</a>
        <a> Contact</a>
        <a id = "login-button"> Login</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
      </div>
    </header>
  );
}

export default Header;
