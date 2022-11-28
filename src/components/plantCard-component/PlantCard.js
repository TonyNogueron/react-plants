import React from "react";
import styles from "./PlantCard.css";
import { useNavigate } from "react-router-dom";

function PlantCard({ plant }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/mainSensors/?idPlant=${plant.idPlant}`);
  };

  return (
    <div className="plantCard">
      <div className="plantCard__info">
        <h3>{plant.plantName}</h3>
        <p>{plant.plantType}</p>
        <img src={"data:image/png;base64," + plant.plantImage} alt="plant" />
        <button onClick={handleClick} />
      </div>
    </div>
  );
}

export default PlantCard;
