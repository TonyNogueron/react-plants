import React from "react";
import Footer from "../../components/footer/Footer";
import AddPlantTop from "../../components/addPlantTop/AddPlantTop";
import CardContainer from "../../components/cardContainer-component/CardContainer";
import HeaderSensors from "../../components/header-sensors/HeaderSensors";
function UserMainPage() {
  return(
    <div className="UserMainpage">
        <HeaderSensors/>
        <AddPlantTop/>
        <CardContainer/>
        <Footer/>
    </div>
  );
}

export default UserMainPage;