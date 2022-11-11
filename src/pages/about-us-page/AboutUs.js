import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopBlockAbtUs from "../../components/top-block-abtUs/TopBlockAbtUs";
import ImageSlider from "../../components/image-slider/ImageSlider";
// import




function AboutUs() {
  return (
    <div className="aboutUs">
      <Header />
        <TopBlockAbtUs/>

      <Footer />

    </div>
  );
}

export default AboutUs;