import React from "react";
import styles from "./AbtUsCardContainer.css";
import CreatorProp from "../CreatorProps/CreatorProp";
import CamiTurnerImg from "../../images/camipfp.jpg";
import tonypfp from "../../images/tonypfp.jpg";
import monkepfp from "../../images/armandopfp.jpg";
export default function AbtUsCardContainer() {
    return (
      <ul className="abtUsCardContainer">
        <CreatorProp class={styles.CreatorProp} image={CamiTurnerImg} title="Camila Turner Escalante" description="ITC" role = "Project Management / UX | UI"/>
        <CreatorProp class={styles.CreatorProp} image={tonypfp} title="Antonio Noguerón Bárcenas" description="ITC" role = "Back End Development"/>
        <CreatorProp class={styles.CreatorProp} image={monkepfp} title="Armando Arredondo Valle" description="ITC" role = "Front End Development / UX | UI"/>
      </ul>
    );
}