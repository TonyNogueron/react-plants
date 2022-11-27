import React from "react";
import PlantCard from "../plantCard-component/PlantCard";
import styles from "./CardContainer.css";


function CardContainer() {
  return (
    <div className="cardContainer">
            <PlantCard class={styles.plantCard}  name="Plant 1" description="This is a plant."/>
            <PlantCard class={styles.plantCard} name="Plant 2" description="This is a plant."/>
            <PlantCard class={styles.plantCard} name="Plant 3" description="This is a plant."/>
            <PlantCard class={styles.plantCard} name="Plant 4" description="This is a plant."/>
            <PlantCard class={styles.plantCard} name="Plant 5" description="This is a plant."/>
            <PlantCard class={styles.plantCard} name="Plant 6" description="This is a plant."/>
    </div>
  );
}

export default CardContainer;