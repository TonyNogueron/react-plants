import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LineChart from "../../components/line-chart-component/LineChartComponent";
import styles from "./ChartPage.css";

function ChartPage() {
  return (
    <div>
      <Header />
      <div className="chart_container">
        <LineChart />
      </div>
      <Footer />
    </div>
  );
}

export default ChartPage;
