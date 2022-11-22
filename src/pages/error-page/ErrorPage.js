import React from "react";
import styles from "./ErrorPage.css";
import errorImg from "../../images/error_svg.svg"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
function ErrorPage(){
    return(
        <>
            <Header/>
                <div className="ErrorPageContainer">
                    <h1 className="ErrorPageHeader">Seems something didn't go well...</h1>
                    <img src={errorImg} alt="Error" className="ErrorPageImg"/>
                </div>
            <Footer/>
        </>
    );
}

export default ErrorPage;