import React from "react";
import styles from "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

// COMPACT THE HEADER NAVIGATION BAR INTO A DROPDOWN MENU

const compactHeader = () => {
  const x = document.getElementById("myTopnotch");
  if (x.className === "topnotch") {
    x.className += " responsive";
  } else {
    x.className = "topnotch";
  }
};

function HeaderSensors() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("idUser");
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Planty</h1>
      <div id="header_logo-box" onClick={() => navigate("/react-plants")}>
        <img src={logo} alt="Logo" id="header_logo" />
      </div>
      <div class="header_nav" id="myTopnotch">
        <a onClick={() => navigate("/UserMainPage")}>My Plants</a>
        <a onClick={() => navigate("/AddPlant")}>Add Plant</a>
        <a id="login-button" onClick={handleLogout}>
          Logout
        </a>
        {/* eslint-disable-next-line no-script-url */}
      </div>
    </header>
  );
}

export default HeaderSensors;
/*
        <a id ="login-button"   onClick={() => navigate("/LoginPage")}> Login</a>

*/
