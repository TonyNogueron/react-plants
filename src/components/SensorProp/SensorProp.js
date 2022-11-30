import React from "react";
import styles from "./SensorProp.css";



export default function SensorProp(sensor) {
    return (
                <li className="SensorProp-item">
                    <img className="SensorProp-image" src={sensor.image} alt="Sensor image" />
                    <div className = "Title-Container">
                        <h2 className="SensorProp-title">{sensor.title}</h2>
                    </div>
                    <div className = "Value-Container">
                        <p className="SensorProp-value">{sensor.value} %</p>
                    </div>
                </li>
    );
}