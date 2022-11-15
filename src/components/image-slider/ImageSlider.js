import React from "react";
import { useState, useEffect } from "react";
import "./ImageSlider.css";

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const insideStyles = {
    backgroundImage: `url('${slides[current].url}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    margin: "0 auto",
  };

  useEffect(() => {
    setInterval(() => {
      handleRightClick();
    }, 20000);
  }, []);

  const outerDivStyles = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "fixed",
    top: "11%",
    bottom: "0%",
    overflow: "hidden",
  };

  const handleRightClick = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const [ticking, setTicking] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => ticking && handleRightClick(), 1e4);
    return () => clearTimeout(timer);
  }, [current, ticking]);

  return (
    <div style={outerDivStyles} id="borderFuera">
      <div style={insideStyles}></div>
    </div>
  );
}

export default ImageSlider;
