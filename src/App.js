/*
  App JS 

*/

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";

import RegisterPage from "./pages/register-page/RegisterPage";
import MainSensors from "./pages/sensors-page/mainSensors";
import AboutUs from "./pages/about-us-page/AboutUs";
import ContactPage from "./pages/contactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/RegisterPage/" element={<RegisterPage/>} />
          <Route exact path = "/mainSensors/" element={<MainSensors/>} />
          <Route exact path = "/AboutUs/" element={<AboutUs/>} />
          <Route exact path = "/ContactPage/" element={<ContactPage/>} />
        </Routes>
      </Router>
      </>
    </div>
  );
}

export default App;
