import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import useMediaQuery from "../../hooks/useMediaQueryHook/useMediaQuery";
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
import { Line } from "react-chartjs-2";

function LineChart() {
  const [chartData, setChartData] = useState({});
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3001/measurement")
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

  let data = {
    labels: Array.isArray(chartData)
      ? chartData.map((item) => item.collectionDate)
      : [],
    datasets: [
      {
        label: "Temperature (C°)",
        data: Array.isArray(chartData)
          ? chartData.map((item) => item.temperature)
          : [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
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
        text: "Temperature (C°) over time",
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
