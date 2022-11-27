import React from "react";
import styles from "./PlantCard.css";

function PlantCard(props) {
  return (
    <div className="plantCard">
      <div className="plantCard__info">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default PlantCard;