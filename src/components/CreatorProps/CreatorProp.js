import React from "react";
import styles from "./CreatorProp.css"

export default function CreatorProp(props) {
    return (
        <li className="creatorProp">
                <img src={props.image } alt={props.title} className="creatorProp-image" />
            <div className="textContainer-CreatorProp">
                    <div className = "creatorProp-title">
                        <h2>{props.role}</h2>
                        <h3>{props.title}</h3>
                    </div>
                    <div className = "creatorProp-description">
                        <p>{props.description}</p>
                    </div>
            </div>
        </li>
    );
}