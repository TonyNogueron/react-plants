import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./Top-blockAbtUs.css"

function TopBlockAbtUs(){
    const navigate = useNavigate();
    return(
    <section className="TopBlockAbtUs" id = "TopBlockAbtUs">
        <div className="TopBlockAbtUs-textBox">
            <h1>Who are we?</h1>
            <p>Planty is a university project, who has the mission on helping those people who can't attend their plants. </p>
            <h2>What do we do?</h2>
            <p>Planty is a digital service that can water your plants, this through their mobile devices. </p>
            <h2>How do we do it?</h2>
            <p>Planty is a digital service that can water your plants, this through their mobile devices. </p>
            <button className="TopBlockAbtUs-button" onClick={() => navigate("/RegisterPage")}>Join us!</button>

        </div>
    </section>

    );
}

export default TopBlockAbtUs;