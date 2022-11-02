import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./HomePage.css";

function HomePage() {
  let navigate = useNavigate();
  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}

export default HomePage;
