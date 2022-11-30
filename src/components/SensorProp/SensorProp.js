import React from "react";
import styles from "./SensorProp.css";

export default function SensorProp({ image, title, value, units }) {
  return (
    <li className="SensorProp-item">
      <img className="SensorProp-image" src={image} alt="Sensor" />
      <div className="Title-Container">
        <h2 className="SensorProp-title">{title}</h2>
      </div>
      <div className="Value-Container">
        <p className="SensorProp-value">
          {value.toString() + " " + (units === undefined ? "%" : units)}
        </p>
      </div>
    </li>
  );
}
