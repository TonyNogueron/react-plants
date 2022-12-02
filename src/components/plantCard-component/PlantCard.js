import React from "react";
import styles from "./PlantCard.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import url from "../../config/apiConfig";

function PlantCard({ plant }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/mainSensors/?idPlant=${plant.idPlant}`);
  };

  const editPlant = () => {
    navigate(`/editPlant/?id=${plant.idPlant}`);
  };

  return (
    <div className="plantCard">
      <div className="plantCard__info">
        <div className="plantCardText">
          <h3 className="PlantName">{plant.plantName}</h3>
          <p className="PlantInfo">{plant.plantType}</p>
        </div>
        <img src={"data:image/png;base64," + plant.plantImage} alt="plant" />
        <div className="plantCard__buttons">
          <button className="ViewPlant" onClick={handleClick}>
            View Plant
          </button>
          <button className="DeletePlant" onClick={editPlant}>
            Edit Plant
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
