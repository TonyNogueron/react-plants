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
  const deletePlant = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#39720C",
      cancelButtonColor: "#414141",
      confirmButtonText: "Yes, delete it!",
      imageUrl:
        "https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681.jpg",
      imageWidth: 350,
      imageHeight: 350,
      imageAlt: "Custom image",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${url}plant/?id=${plant.idPlant}`)
          .then((res) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            //wait 1 second to reload the page
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          })
          .catch((err) => {
            Swal.fire(
              "Something went wrong!",
              "Your file has not been deleted.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="plantCard">
      <div className="plantCard__info">
        <h3 className="PlantName">{plant.plantName}</h3>
        <p className="PlantInfo">{plant.plantType}</p>
        <img src={"data:image/png;base64," + plant.plantImage} alt="plant" />
        <div className="plantCard__buttons">
          <button className="ViewPlant" onClick={handleClick}>
            View Plant
          </button>
          <button className="DeletePlant" onClick={deletePlant}>
            Delete Plant
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
