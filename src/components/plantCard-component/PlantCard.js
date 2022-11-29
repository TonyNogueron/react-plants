import React from "react";
import styles from "./PlantCard.css";
import { useNavigate } from "react-router-dom";

function PlantCard({ plant }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/mainSensors/?idPlant=${plant.idPlant}`);
  };
  const deletePlant = () => {
    console.log("delete plant");
  };

  return (
    <div className="plantCard">
      <div className="plantCard__info">
        <h3 className="PlantName">{plant.plantName}</h3>
        <p className="PlantInfo">{plant.plantType}</p>
        <img src={"data:image/png;base64," + plant.plantImage} alt="plant" />
        <div className="plantCard__buttons">
          <button className = "ViewPlant" onClick={handleClick}>View Plant</button>
          <button className="DeletePlant" onClick={deletePlant}>Delete Plant</button>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
