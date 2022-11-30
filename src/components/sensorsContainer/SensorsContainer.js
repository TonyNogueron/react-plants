import React from "react";
import styles from "./SensorsContainer.css";
import SensorProp from "../../components/SensorProp/SensorProp";
import WaterPlant from "../WaterPlants-component/WaterPlant";
import luzLogo from "../../images/luz_svg.svg";
import waterLevel from "../../images/waterLvl_svg.svg";
import earthHumidity from "../../images/earthHum_svg.svg";

function SensorsContainer() {
  return (
    <ul className="SensorCards-container">
        <SensorProp class={styles.SensorCardsContainer} title = "Weather Humidity" value = "2"/>
        <SensorProp class={styles.SensorCardsContainer} title = "Light Sensor" value = "3"  image = {luzLogo}/>
        <SensorProp class={styles.SensorCardsContainer} title = "Earth Humidity" value = "3"  image = {earthHumidity}/>
        <WaterPlant class={styles.SensorCardsContainer} />

    </ul>
  );
}

export default SensorsContainer;