import React from "react";
import styles from "./SensorProp.css";
import { useNavigate } from "react-router-dom";

export default function SensorProp({ image, title, value, units, redirect }) {
  const navigate = useNavigate();
  return (
    <li
      className="SensorProp-item"
      onClick={() => {
        navigate(redirect);
      }}
    >
      <img className="SensorProp-image" src={image} alt="Sensor" />
      <div className="Title-Container">
        <h2 className="SensorProp-title">{title}</h2>
      </div>
      <div className="Value-Container">
        <p className="SensorProp-value">
          {value === undefined
            ? ""
            : value.toString() + " " + (units === undefined ? "%" : units)}
        </p>
      </div>
    </li>
  );
}
