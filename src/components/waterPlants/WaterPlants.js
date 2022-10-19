import React from "react";
import styles from "./WaterPlants.css";

function WeatherHumidity() {
    return (
        <div className="waterPlants">
            <div className = "imageWat">
                <div className="waterContainer">
                    <div className="waterHeader">
                        <h1>Next water in...</h1>
                    </div>
                    <div className="waterText" id = "box-text">
                        <h2>0 m</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherHumidity;