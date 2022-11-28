import React from "react";
import styles from "./PlantCard.css";

function PlantCard(props) {
  return (
    <div className="plantCard">
      <div className="plantCard__info">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
          <img src={"data:image/png;base64,"+props.plantImage} alt="plant" />
      </div>
    </div>
  );
}

export default PlantCard;