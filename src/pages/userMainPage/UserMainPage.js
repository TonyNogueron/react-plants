import React from "react";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import AddPlantTop from "../../components/addPlantTop/AddPlantTop";
import CardContainer from "../../components/cardContainer-component/CardContainer";
import HeaderSensors from "../../components/header-sensors/HeaderSensors";
import axios from "axios";
import url from "../../config/apiConfig";

function UserMainPage() {
    document.body.style.backgroundColor = "#E9E9E9";

    const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}plantById/?id=${localStorage.getItem("idUser")}`)
      .then((response) => {
        setPlants(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="UserMainpage">
      <HeaderSensors />
      <AddPlantTop />
      <CardContainer plants={plants} />
      <Footer />
    </div>
  );
}

export default UserMainPage;
