import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./top-block.css"
import logo from "../../images/logo_svg.svg";

function TopBlock(){
    const navigate = useNavigate();
    return(
    <section className="topBlock" id = "topBlock">
        <div className="topBlock__container">
            <div className="topBlock__container__text">
                <h1 className="topBlock__container__text__title">Planty</h1>
                <img src={logo} alt="Planty" className="plantyLogo"/>
                <p className="topBlock__container__text__description">Planty is composed of two parts: an intelligent pot that is able to monitor the status of your plant and a digital service where you
                    can see the data gathered from the sensors that are included in the pot, all this through your mobile device.</p>
                <button className="topBlock__container__text__button" onClick={() => navigate("/ContactPage")}>Contact</button>
            </div>

        </div>
    </section>

    );
}

export default TopBlock;