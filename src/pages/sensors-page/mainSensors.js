import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SensorCard from "../../components/sensor-card/sensorCard";
import WeatherHumidity from "../../components/weatherHumidity/WeatherHumidity";
import LightPercentage from "../../components/lightPercentage/LightPercentage";
import EarthHumidity from "../../components/earthHumidity/EarthHumidity";
import WaterPlants from "../../components/waterPlants/WaterPlants";
import WaterLevels from "../../components/waterLevels/WaterLevels";

function MainSensors() {
  return (
    <div>
      <Header />
        <SensorCard/>
        <WaterPlants/>
        <WeatherHumidity/>
        <LightPercentage/>
        <EarthHumidity/>
        <WaterLevels/>
        <WaterPlants/>
      <Footer />
    </div>
  );
}

export default MainSensors;