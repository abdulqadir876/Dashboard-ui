import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <div className="p-4">
      <Header />
      <div className="mt-5">
        <h1>Overview</h1>
        <div className="" style={{ width: 700 }}>
        <Bar options={chartOptions} data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
