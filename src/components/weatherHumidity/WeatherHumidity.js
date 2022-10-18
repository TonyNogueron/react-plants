import React from "react";
import styles from "./WeatherHumidity.css";
import waterDropImg from "../../images/waterDrop.png";

function WeatherHumidity() {
    return (
        <div className="percentageHum">
            <div className = "imageHum">
                <img src={waterDropImg} alt="humidity" />
                <div className="percentageHum__container">
                    <div className="percentageHum__container__percentage" id = "box-text">
                        <h1>0 %</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherHumidity;