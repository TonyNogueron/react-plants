import React from "react";
import styles from "./AddPlantTop.css";

function AddPlantTop(){
    return(
        <div className="AddPlantTop-container">
                <div className="AddPlantTopTitle">
                    <h1> My Plants</h1>
                </div>
                <button className="AddPlantTop__add__button">Add Plant +</button>
        </div>
    );
}

export default AddPlantTop;