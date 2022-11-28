import React from "react";
import styles from "./AddPlantTop.css";
import { useNavigate } from "react-router-dom";

function AddPlantTop() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/AddPlant");
  };

  return (
    <div className="AddPlantTop-container">
      <div className="AddPlantTopTitle">
        <h1> My Plants</h1>
      </div>
      <button onClick={handleClick} className="AddPlantTop__add__button">
        Add Plant +
      </button>
    </div>
  );
}

export default AddPlantTop;
