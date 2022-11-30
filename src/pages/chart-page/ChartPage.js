import React from "react";
import HeaderSensors from "../../components/header-sensors/HeaderSensors";
import Footer from "../../components/footer/Footer";
import LineChart from "../../components/line-chart-component/LineChartComponent";
import styles from "./ChartPage.css";

function ChartPage() {
  return (
    <div>
      <HeaderSensors />
      <div className="chart_container">
        <LineChart />
      </div>
      <Footer />
    </div>
  );
}

export default ChartPage;
