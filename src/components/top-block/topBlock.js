import React from "react";
import styles from "./top-block.css"

function TopBlock(){
    return(
    <section className="topBlock" id = "topBlock">
        <div className="topBlock-textBox">
            <h1>What's Planty?</h1>
            <p>Planty is a university project, that has the mission to aid those persons who can't constantly pay attention to their plants. </p>
            <button>About us > </button>

        </div>
    </section>

    );
}

export default TopBlock;