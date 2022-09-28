import React from "react";
import "./Footer.css";

import logo from "../../images/logo.png";

function Footer() {
  return (
    <footer>
      <div id="footer_logo_box">
        <p>Planty</p>
        <img src={logo} alt="Logo" id="footer_logo"></img>
      </div>
    </footer>
  );
}

export default Footer;
