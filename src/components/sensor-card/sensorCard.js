import React from "react";
import styles from "./sensorCard.css";
//import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
import plantStatusImg from '../../images/logo_svg.svg';


const changeSVGColor = () => {
    let status = 0;
    const plantStatusImg = document.querySelector('.plantStatusImg');
    plantStatusImg.addEventListener('click', () => {
        console.log('click');
        plantStatusImg.style.fill = 'green';
    });
}

function SensorCard() {
    return (
        <div className="plantStatus_container">
            <div className="plantStatusImg">
                <img src={plantStatusImg} alt="Plant Status" id = "svgStatus" onClick={changeSVGColor}/>
            </div>
        </div>
        
    );
}

export default SensorCard;