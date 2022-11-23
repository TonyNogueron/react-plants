import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddPlantTop from "../../components/addPlantTop/AddPlantTop";
function UserMainPage() {
  return(
    <div className="UserMainpage">
        <Header/>
        <AddPlantTop/>
        <Footer/>
    </div>
  );
}

export default UserMainPage;