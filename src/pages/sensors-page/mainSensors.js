import React from "react";
import Footer from "../../components/footer/Footer";
import SensorCard from "../../components/sensor-card/sensorCard";
import HeaderSensors from "../../components/header-sensors/HeaderSensors";
import SensorsContainer from "../../components/sensorsContainer/SensorsContainer";
import url from "../../config/apiConfig";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import axios from "axios";

function MainSensors() {
  const [sensorData, setSensorData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const plantId = searchParams.get("idPlant");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url + "measurement/last/?id=" + plantId)
        .then((res) => {
          const data = res.data[0];
          setSensorData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  console.log(sensorData);
  return (
    <div>
      <HeaderSensors />
        <SensorsContainer />
      <SensorCard />
      <Footer />
    </div>
  );
}

export default MainSensors;
