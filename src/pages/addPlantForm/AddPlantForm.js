import React from "react";
import styles from "./AddPlantForm.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function AddPlantForm(){
    return (
        <>
            <Header />
            return (
                <section id="register_background">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="register_plant_form">
                                    <h1 className="addHeader">Add a new plant</h1>
                                    <form className="form">
                                        <div className="form-group">
                                            <label form="inputPlantName">Plant name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputPlantName"
                                                aria-describedby="plantNameHelp"
                                                placeholder="Enter a plant name"
                                            />

                                        </div>
                                        <div className="form-group">
                                            <label form="inputPlantType">Plant type</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputPlantType"
                                                aria-describedby="plantTypeHelp"
                                                placeholder="Enter a plant type"
                                            />

                                        </div>
                                        <div className = "form-group">
                                            <label form="inputPlantDescription">Plant description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputPlantDescription"
                                                aria-describedby="plantDescriptionHelp"
                                                placeholder="Enter a plant description"
                                            />

                                        </div>
                                        <div className = "form-group">
                                            <label form="inputPlantImage">Plant image</label>
                                            <input
                                                type="file"
                                                className="addFiles"
                                                id="inputPlantImage"
                                                aria-describedby="plantImageHelp"
                                                placeholder="Upload a plant image"
                                            />

                                        </div>
                                    </form>
                                    <button type="submit" className="btn-primary" >
                                        Add plant
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            <Footer/>
        </>
    )
}

export default AddPlantForm;