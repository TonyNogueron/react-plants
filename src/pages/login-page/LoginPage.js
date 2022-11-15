import { useState } from "react";
import "./LoginPage.css";
import Login from "../../components/login-component/Login";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import imageSlider from "../../components/image-slider/ImageSlider";
export default function LoginPage() {
  return (
    <>
        <Header />
        <Login/>
        <Footer/>
    </>
  );
}