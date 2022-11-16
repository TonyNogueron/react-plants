import React from "react";
import {useNavigate} from "react-router-dom";
import {useRef} from "react";
import styles from "./Top-blockAbtUs.css"

function TopBlockAbtUs(){
    const navigate = useNavigate();
    const ref = useRef(null);
    return(
    <div className="topBlockAbtUs" ref={(ref)=>this.myRef=ref}>
        <div className="topBlockAbtUs__container">
            <div className="topBlockAbtUs__container__text">
                <h1 className="topBlockAbtUs__container__text__title">About Us</h1>
                <p className="topBlockAbtUs__container__text__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam mauris, eget aliquet nisl nisl sit amet nisl. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam mauris, eget aliquet nisl nisl sit amet nisl.</p>
                <button className="topBlockAbtUs__container__text__button" onClick={() => navigate("/contact-us")}>Contact Us</button>
            </div>
            <div className="topBlockAbtUs__container__image">
                <img src="https://images.unsplash.com/photo-1517841900229-3a7b3a5b5089?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlJTIwc2hvcHBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="background" className="topBlockAbtUs__container__image__img"/>
            </div>
        </div>
    </div>


    );
}

export default TopBlockAbtUs;