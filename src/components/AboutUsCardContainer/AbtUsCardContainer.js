import React from "react";
import styles from "./AbtUsCardContainer.css";
import CreatorProp from "../CreatorProps/CreatorProp";

export default function AbtUsCardContainer() {
    return (
      <ul className="abtUsCardContainer">
        <CreatorProp class={styles.CreatorProp} image="https://www.clara.es/medio/2022/03/16/plantas-de-interior-bonitas_ad98ca6d_1280x720.jpg" title="Cami" description="ITC" role = "Project Management / UX"/>
      </ul>
    );
}