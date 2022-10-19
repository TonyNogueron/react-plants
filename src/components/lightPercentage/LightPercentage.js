import React from "react";
import styles from "./LightPercentage.css";
import waterDropImg from "../../images/lightImg.png";

function LightPercentage() {
    return (
        <div className="percentageLight">
            <div className = "imageLight">
                <img src={waterDropImg} alt="light" id = "imgLight" />
                <div className="percentageLight__container">
                    <div className="percentageLight__container__percentage" id = "box-text">
                        <h1>0 %</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LightPercentage;