import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddPlantTop from "../../components/addPlantTop/AddPlantTop";
import CardContainer from "../../components/cardContainer-component/CardContainer";
function UserMainPage() {
  return(
    <div className="UserMainpage">
        <Header/>
        <AddPlantTop/>
        <CardContainer/>
        <Footer/>
    </div>
  );
}

export default UserMainPage;