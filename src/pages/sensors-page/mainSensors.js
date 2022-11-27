import React from "react";
import Footer from "../../components/footer/Footer";
import SensorCard from "../../components/sensor-card/sensorCard";
import WeatherHumidity from "../../components/weatherHumidity/WeatherHumidity";
import LightPercentage from "../../components/lightPercentage/LightPercentage";
import EarthHumidity from "../../components/earthHumidity/EarthHumidity";
import WaterPlants from "../../components/waterPlants/WaterPlants";
import WaterLevels from "../../components/waterLevels/WaterLevels";
import HeaderSensors from "../../components/header-sensors/HeaderSensors";
import url from "../../config/apiConfig";
import { useEffect, useState } from "react";

import axios from "axios";

function MainSensors({ plantId }) {
  const [sensorData, setSensorData] = useState([]);

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
      <SensorCard />
      <WeatherHumidity humidity={sensorData?.airHumidity} />
      <LightPercentage light={sensorData?.light} />
      <EarthHumidity earthHumidity={sensorData?.earthHumidity} />
      <WaterLevels waterLevel={sensorData?.waterLevel} />
      <WaterPlants nextWater={0} />
      <Footer />
    </div>
  );
}

export default MainSensors;
