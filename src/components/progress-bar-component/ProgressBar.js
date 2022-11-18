import React, { useState } from "react";
import styles from "./ProgressBar.css";

export default function ProgressBar({ progress }) {
  const bar = document.getElementById("myprogressBar");

  if (bar) {
    bar.style.width = progress + "%";
    if (progress === 100) {
      bar.style.backgroundColor = "green";
    } else if (progress > 50) {
      bar.style.backgroundColor = "yellow";
    } else {
      bar.style.backgroundColor = "red";
    }
  }

  return (
    <div id="Progress_Status">
      <div id="myprogressBar"></div>
    </div>
  );
}
