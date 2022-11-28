import React from "react";
import PlantCard from "../plantCard-component/PlantCard";
import styles from "./CardContainer.css";


function CardContainer() {
  return (
    <div className="cardContainer">
        <PlantCard class={styles.plantCard} name = "Plant" plantType = "Description"/>
    </div>
  );
}

export default CardContainer;