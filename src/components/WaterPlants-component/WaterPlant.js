import React from "react";
import styles from "./WaterPlant.css";
import waterPlantImg from "../../images/nextWater_svg.svg";
import axios from "axios";
import url from "../../config/apiConfig";
import Swal from "sweetalert2";

export default function WaterPlant({ plantId }) {
  const waterPlant = () => {
    axios
      .put(url + "pump?id=" + plantId + "&status=1")
      .then((res) => {
        Swal.fire({
          title: "Watering your plant...",
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error watering your plant",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <li className="WaterPlant-container">
      <img className="WaterPlant-image" src={waterPlantImg} alt="WaterPlant" />
      <button className="WaterPlant-button" onClick={waterPlant}>
        Water
      </button>
    </li>
  );
}
