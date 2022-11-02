import React from "react";
import styles from "./Header.css";
import { useNavigate } from "react-router-dom";
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
    //const navigate = useNavigate();
    return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Planty</h1>
      <div id="header_logo-box">
        <img src={logo} alt="Logo" id="header_logo" />
      </div>
      <div class = "header_nav" id = "myTopnav">
        <a> About</a>
        <a> Contact</a>
        <a id ="register-button" href=""> Register</a>
        <a href="javascript:void(0);" class="icon" onclick={compactHeader}>&#9776;</a>
      </div>
    </header>
  );
}

export default Header;
/*
        <a id ="login-button"   onClick={() => navigate("/LoginPage")}> Login</a>

*/