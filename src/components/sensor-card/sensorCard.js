import React from "react";
import styles from "./sensorCard.css";

function SensorCard() {
    return (
        <div className="percentageTemp">
            <div className="percentageTemp__container">
                <div className="percentageTemp__container__title">
                    <h2>Temperature</h2>
                </div>
                <div className="percentageTemp__container__percentage">
                    <h1>0 °C</h1>
                </div>
              </div>
        </div>
        
    );
}

export default SensorCard;