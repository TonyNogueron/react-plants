import React from "react";
import styles from "./AbtUsCardContainer.css";
import CreatorProp from "../CreatorProps/CreatorProp";
import CamiTurnerImg from "../../images/camipfp.jpg";
import tonypfp from "../../images/tonypfp.jpg";
import monkepfp from "../../images/armandopfp.jpg";
export default function AbtUsCardContainer() {
    return (
      <ul className="abtUsCardContainer">
        <CreatorProp class={styles.CreatorProp} image={CamiTurnerImg} title="Camila Turner Escalante" description="ITC | camilaturner_08@hotmail.com" role = "Project Management / UX | UI" linkedin = "https://www.linkedin.com/in/camila-turner-escalante/" mailto="mailto:camilaturner_08@hotmail.com"/>
        <CreatorProp class={styles.CreatorProp} image={tonypfp} title="Antonio Noguerón Bárcenas" description="ITC | antonio.nogueron03@outlook.com" role = "Back End Development" linkedin = "https://www.linkedin.com/in/antonio-nogueron/" mailto="mailto:antonio.nogueron03@outlook.com"/>
        <CreatorProp class={styles.CreatorProp} image={monkepfp} title="Armando Arredondo Valle" description="ITC | armando.arredondo.valle@outlook.com" role = "Front End Development / UX | UI" linkedin = "https://www.linkedin.com/in/armando-av/" mailto="mailto:armando.arredondo.valle@outlook.com"/>
      </ul>
    );
}