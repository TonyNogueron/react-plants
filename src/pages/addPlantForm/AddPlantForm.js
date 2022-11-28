import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import styles from "./AddPlantForm.css";
import HeaderSensors from "../../components/header-sensors/HeaderSensors";
import Footer from "../../components/footer/Footer";
import url from "../../config/apiConfig";

function AddPlantForm() {
  const navigate = useNavigate();

  const [plantName, setPlantName] = useState("");
  const [plantType, setPlantType] = useState("");
  const [plantIconFile, setPlantIconFile] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("plantName", plantName);
    formData.append("plantType", plantType);
    formData.append("plantIconImage", plantIconFile);
    formData.append("idUser", localStorage.getItem("idUser"));
    await axios
      .post(`${url}plant`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Plant added successfully");
        } else {
          alert("Error adding plant");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <HeaderSensors />
      <section id="register_background">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="register_plant_form">
                <h1 className="addHeader">Add a new plant</h1>
                <form className="form">
                  <div className="form-group">
                    <label form="inputPlantName">Plant name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPlantName"
                      aria-describedby="plantNameHelp"
                      placeholder="Enter a plant name"
                      onChange={(event) => setPlantName(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label form="inputPlantType">Plant type</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPlantType"
                      aria-describedby="plantTypeHelp"
                      placeholder="Enter a plant type"
                      onChange={(event) => setPlantType(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label form="inputPlantImage">Plant image</label>
                    <input
                      type="file"
                      className="addFiles"
                      id="inputPlantImage"
                      aria-describedby="plantImageHelp"
                      placeholder="Upload a plant image"
                      accept="image/*"
                      onChange={(event) =>
                        setPlantIconFile(event.target.files[0])
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    onClick={handleSubmit}
                  >
                    Add plant
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AddPlantForm;
