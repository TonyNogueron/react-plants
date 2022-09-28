import React from "react";
import styles from "./Header.css";

import logo from "../../images/logo.png";
function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Planty</h1>
      <div id="header_logo-box">
        <img src={logo} alt="Logo" id="header_logo" />
      </div>
    </header>
  );
}

export default Header;
