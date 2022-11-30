import React from "react";
import styles from "./WaterPlant.css";
import waterPlantImg from "../../images/nextWater_svg.svg";

export default function WaterPlant() {
    return (
        <li className="WaterPlant-container">
            <img className="WaterPlant-image" src={waterPlantImg} alt="WaterPlant image" />
            <button className="WaterPlant-button">Water</button>
        </li>
    );
}