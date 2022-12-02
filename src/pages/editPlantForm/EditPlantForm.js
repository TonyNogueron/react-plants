import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./EditPlantForm.css";
import url from "../../config/apiConfig";
import Swal from "sweetalert2";

function EditPlantForm({ initialState }) {
  const navigate = useNavigate();

  const [plantName, setPlantName] = useState("");
  const [plantType, setPlantType] = useState("");
  const [plantIconFile, setPlantIconFile] = useState();

  useEffect(() => {
    setValues();
  }, []);

  const setValues = () => {
    setPlantName(initialState.plantName);
    setPlantType(initialState.plantType);
    setPlantIconFile(initialState.plantIconImage);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("plantName", plantName);
    formData.append("plantType", plantType);
    if (plantIconFile !== undefined) {
      formData.append("plantIconImage", plantIconFile);
    }
    formData.append("idPlant", initialState.idPlant);
    await axios
      .post(`${url}updatePlant`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You have successfully edited your plant!",
          });
          navigate("/UserMainPage");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="register_plant_form">
                <h1 className="addHeader">Edit your plant</h1>
                <form className="form">
                  <div className="form-group">
                    <label form="inputPlantName">Plant name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPlantName"
                      aria-describedby="plantNameHelp"
                      placeholder="Enter a plant name"
                      value={plantName}
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
                      value={plantType}
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
                    Edit plant
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditPlantForm;
