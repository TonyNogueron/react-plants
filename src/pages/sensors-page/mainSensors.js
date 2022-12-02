import React from "react";
import Footer from "../../components/footer/Footer";
import SensorCard from "../../components/sensor-card/sensorCard";
import HeaderSensors from "../../components/header-sensors/HeaderSensors";
import SensorsContainer from "../../components/sensorsContainer/SensorsContainer";
import SensorProp from "../../components/SensorProp/SensorProp";
import WaterPlant from "../../components/WaterPlants-component/WaterPlant";
import luzLogo from "../../images/luz_svg.svg";
import airImage from "../../images/AirHumidity_svg.svg";
import temperatureImage from "../../images/temperatura_svg.svg";
import earthHumidity from "../../images/earthHum_svg.svg";
import styles from "../../components/sensorsContainer/SensorsContainer.css";
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
  document.body.style.backgroundColor = "#E9E9E9";
  return (
    <div>
      <HeaderSensors />
      <SensorsContainer
        children={
          <>
            <SensorProp
              class={styles.SensorCardsContainer}
              title="Temperature"
              value={sensorData?.temperature?.toFixed(2)}
              units="°C"
              image={temperatureImage}
              redirect={`/chart/?idPlant=${plantId}&type=temperature`}
            />
            <SensorProp
              class={styles.SensorCardsContainer}
              title="Weather Humidity"
              value={sensorData?.airHumidity}
              image={airImage}
              redirect={`/chart/?idPlant=${plantId}&type=airHumidity`}
            />
            <SensorProp
              class={styles.SensorCardsContainer}
              title="Light"
              value={sensorData?.light}
              image={luzLogo}
              redirect={`/chart/?idPlant=${plantId}&type=light`}
            />
            <SensorProp
              class={styles.SensorCardsContainer}
              title="Soil Humidity"
              value={sensorData?.earthHumidity}
              image={earthHumidity}
              redirect={`/chart/?idPlant=${plantId}&type=earthHumidity`}
            />
            <WaterPlant class={styles.SensorCardsContainer} plantId={plantId} />
          </>
        }
      />
      <SensorCard />
      <Footer />
    </div>
  );
}

export default MainSensors;
