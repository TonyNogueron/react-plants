import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import useMediaQuery from "../../hooks/useMediaQueryHook/useMediaQuery";
import url from "../../config/apiConfig";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSearchParams } from "react-router-dom";
import { Line } from "react-chartjs-2";

function LineChart() {
  const [chartData, setChartData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const plantId = searchParams.get("idPlant");
  const type = searchParams.get("type");
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url + "measurements?id=" + plantId)
        .then((res) => {
          const data = res.data;
          setChartData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  let sensorData = [];
  let chartTitle = "";
  let chartLabel = "";
  let chartBorderColor = "";
  let chartBackgroundColor = "";

  if (type === "temperature") {
    sensorData = Array.isArray(chartData)
      ? chartData.map((item) => item.temperature)
      : [];
    chartTitle = "Temperature (C°) over time";
    chartLabel = "Temperature (C°)";
    chartBorderColor = "rgba(222, 78, 50, 1)";
    chartBackgroundColor = "rgba(222, 78, 50, 0.6)";
  } else if (type === "airHumidity") {
    sensorData = Array.isArray(chartData)
      ? chartData.map((item) => item.airHumidity)
      : [];
    chartTitle = "Air humidity (%) over time";
    chartLabel = "Air humidity (%)";
    chartBorderColor = "rgba(44, 138, 192, 1)";
    chartBackgroundColor = "rgba(44, 138, 192, 0.6)";
  } else if (type === "light") {
    sensorData = Array.isArray(chartData)
      ? chartData.map((item) => item.light)
      : [];
    chartTitle = "Light (%) over time";
    chartLabel = "Light (%)";
    chartBorderColor = "rgba(222, 199, 50, 1)";
    chartBackgroundColor = "rgba(222, 199, 50, 0.6)";
  } else if (type === "earthHumidity") {
    sensorData = Array.isArray(chartData)
      ? chartData.map((item) => item.earthHumidity)
      : [];
    chartTitle = "Earth humidity (%) over time";
    chartLabel = "Earth humidity (%)";
    chartBorderColor = "rgba(20, 65, 13, 1)";
    chartBackgroundColor = "rgba(20, 65, 13, 0.6)";
  }

  let data = {
    labels: Array.isArray(chartData)
      ? chartData.map((item) => item.collectionDate)
      : [],
    datasets: [
      {
        label: chartLabel,
        data: sensorData,
        borderColor: chartBorderColor,
        backgroundColor: chartBackgroundColor,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
    scales: {
      xAxis: {
        ticks: {
          maxTicksLimit: 12,
          display: !isMobile,
        },
      },
    },
    maintainAspectRatio: false,
  };
  return <Line options={options} data={data} />;
}

export default LineChart;
