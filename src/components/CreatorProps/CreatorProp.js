import React from "react";
import styles from "./CreatorProp.css"

export default function CreatorProp(props) {
    return (
        <li className="creatorProp">
                <img src={props.image } alt={props.title} className="creatorProp-image" />
            <div className="textContainer-CreatorProp">
                    <div className = "creatorProp-title">
                        <h2>{props.role}</h2>
                        <a href={props.linkedin}>
                            <img alt="LinkedinArmando" id="logosSocial" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
                        </a>
                        <a href={props.mailto}>
                            <img alt = "Mail" id = "logosSocial" src = "https://img.shields.io/badge/Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white"/>                        </a>
                        <h3>{props.title}</h3>
                    </div>
                    <div className = "creatorProp-description">
                        <p>{props.description}</p>
                    </div>
            </div>
        </li>
    );
}