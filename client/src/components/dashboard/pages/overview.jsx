import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import "../../../styles/dashboard/pages/overview.css";

export default function Overview(props) {
  const { name, balance } = props;
  const transactionHistory = [
    {
      time: 1,
      currentBalance: 2000,
      from: "Elon",
    },
  ];

  const [chartData, setChartData] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [
      {
        label: "Account Balance",
        data: [100, 200, 1000, 400, 100, 600, 200, 800],
        backgroundColor: ["rgba(144, 114, 59, 0.537)"],
        borderColor: ["orange"],
        fill: true,
        pointBackgroundColor: "red",
      },
    ],
  });

  const options = {
    maintainAspectRatio: false,
    tension: 0.6,
    hitRadius: 100,
    responsive: true,
    hoverRadius: 7,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value + "m";
          },
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="overview-page">
      <h1>Overview</h1>
      <div className="welcome">
        Welcome,<span className="name"> {name}.</span>
      </div>
      <div className="balance-container">
        <div className="total-balance">
          <i className="fa-solid fa-wallet"></i>
          <span className="balace-label">Total Balance</span>
          <span className="balance">${balance}</span>
        </div>
        <div className="total-transaction">
          <i className="fa-solid fa-right-left"></i>
          <span className="transaction-label">Transactions</span>
          <span className="transaction">$1000</span>
        </div>
      </div>
      <div className="chart">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
