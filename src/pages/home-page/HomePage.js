import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopBlock from "../../components/top-block/topBlock";
import styles from "./HomePage.css";

function HomePage() {
  let navigate = useNavigate();
  return (
    <div className="homePage">
      <Header />
        <TopBlock/>
      <Footer />
    </div>
  );
}

export default HomePage;
