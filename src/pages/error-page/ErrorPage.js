import React from "react";
import styles from "./ErrorPage.css";

function ErrorPage(){
    return(
        <div className="ErrorPageContainer">
            <h1 className="ErrorPageTitle">404</h1>
            <h2 className="ErrorPageSubtitle">Page not found</h2>
            <p className="ErrorPageText">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            
        </div>
    );
}

export default ErrorPage;