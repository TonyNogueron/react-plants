import React from "react";
import styles from "./WaterLevels.css";

function WaterLevels({waterLevel}) {
    return (
        <div className="WaterLevels">
            <div className = "imageWat">
                <div className="waterContainer">
                    <div className="WaterLevelsHeader">
                        <h1>Water level</h1>
                    </div>
                    <div className="WaterLevelsText" id = "box-text">
                        <h2>{waterLevel} %</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WaterLevels;