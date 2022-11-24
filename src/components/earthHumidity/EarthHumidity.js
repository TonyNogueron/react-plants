import React from "react";
import styles from "./EarthHumidity.css";
import waterDropImg from "../../images/logo.png";

function EarthHumidity({earthHumidity}) {
    return (
        <div className="percentageEarthHumidity">
            <div className = "imageEarthHumidity">
                <img src={waterDropImg} alt="light" id = "imagEarthHumidity" />
                <div className="percentageEarthHumidity__container">
                    <div className="percentageEarthHumidity__container__percentage" id = "box-text">
                        <h1>{earthHumidity} %</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EarthHumidity;