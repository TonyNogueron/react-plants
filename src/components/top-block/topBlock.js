import React from "react";
import styles from "./top-block.css"
import plantImg from "../../images/plantDeco.png"

function TopBlock(){
    return(
    <section className="topBlock" id = "topBlock">
        <div className="topBlock-textBox">
            <img src={plantImg} alt={plantImg}/>
            <h1>What's Planty?</h1>
            <p>Planty is a university project, that has the mission to aid those persons who can't constantly pay attention to their plants. </p>
            <button>About us > </button>
        </div>
    </section>
    );
}

export default TopBlock;