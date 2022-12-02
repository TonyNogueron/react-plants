import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import styles from "./AddPlantForm.css";
import HeaderSensors from "../../components/header-sensors/HeaderSensors";
import ImageSlider from "../../components/image-slider/ImageSlider";
import Footer from "../../components/footer/Footer";
import url from "../../config/apiConfig";
import Swal from "sweetalert2";


const slidesArray = [
  {url: 'https://media.admagazine.com/photos/61de539e089751617cd2fc74/16:9/w_2560%2Cc_limit/plantas.jpg', title: 'Plants'},
  {url: 'https://estaticos-cdn.prensaiberica.es/clip/d0fad945-7822-4c52-8820-d2f5487078cd_16-9-discover-aspect-ratio_default_0.jpg', title: 'Leaves'},
  {url: 'https://www.clara.es/medio/2022/03/16/plantas-de-interior-bonitas_ad98ca6d_1280x720.jpg', title: 'Cactus'},
  {url: 'https://quinto-poder.mx/u/fotografias/m/2022/9/28/f608x342-26452_56175_17.jpg', title: 'CactusBonito'},
  {url: 'https://s1.eestatic.com/2021/03/22/actualidad/567954346_176146463_1706x960.jpg', title: 'Pots'},
];


function AddPlantForm() {
  const navigate = useNavigate();

  const [plantName, setPlantName] = useState("");
  const [plantType, setPlantType] = useState("");
  const [plantIconFile, setPlantIconFile] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (plantName === "" || plantType === "" || plantIconFile === "") {
      alert("Please fill in all fields");
    } else {
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
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "You have successfully added your plant!",
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
    }
  };

  return (
    <>
      <HeaderSensors />
      <ImageSlider slides={slidesArray} />
      <section>
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
