/*
  App JS 

*/

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import ProtectedRoute from "./components/protected-route-component/ProtectedRoute";

import RegisterPage from "./pages/register-page/RegisterPage";
import MainSensors from "./pages/sensors-page/mainSensors";
import AboutUs from "./pages/about-us-page/AboutUs";
import ContactPage from "./pages/contactPage/ContactPage";
import AddPlant from "./pages/addPlant-page/AddPlant";
import ChartPage from "./pages/chart-page/ChartPage";
import LoginPage from "./pages/login-page/LoginPage";
import ErrorPage from "./pages/error-page/ErrorPage";
import UserMainpage from "./pages/userMainPage/UserMainPage";
import AddPlantForm from "./pages/addPlantForm/AddPlantForm";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route exact path="*" element={<ErrorPage />} />
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/RegisterPage/" element={<RegisterPage />} />
            <Route exact path="/AboutUs/" element={<AboutUs />} />
            <Route exact path="/ContactPage/" element={<ContactPage />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/UserMainPage" element={<UserMainpage />} />
            <Route exact path="/AddPlant" element={<AddPlantForm />} />
            <Route
              exact
              path="/........................./"
              element={<AddPlant />}
            />
            <Route
              exact
              path="/mainSensors/"
              element={
                <ProtectedRoute>
                  <MainSensors plantId={1} />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/chart/"
              element={
                <ProtectedRoute>
                  <ChartPage />{" "}
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
