import React from "react";
import PlantCard from "../plantCard-component/PlantCard";
import styles from "./CardContainer.css";

function CardContainer({ plants }) {
  return (
    <div className="cardContainer">
      {plants.map((plant) => (
        <PlantCard plant={plant} />
      ))}
    </div>
  );
}

export default CardContainer;
