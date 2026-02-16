import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Artificial Intelligence",
        data: [
          0.42, 0.6462, 0.9946, 1.5298, 2.3526, 3.6146, 5.5508, 8.5235, 13.0771,
          20.0655, 30.7841,
        ],
      },
      {
        name: "Quantum Computing",
        data: [
          0.0003, 0.000476, 0.000755, 0.001197, 0.001898, 0.003011, 0.004776,
          0.007581, 0.012036, 0.019114, 0.030342,
        ],
      },
      {
        name: "Cybersecurity",
        data: [
          75, 82.35, 90.0, 98.1, 106.9, 116.1, 126.1, 136.7, 148.4, 160.6,
          173.9,
        ],
      },
      {
        name: "Cloud Computing",
        data: [
          78.43, 85.58, 93.38, 101.93, 111.26, 121.43, 132.51, 144.52, 157.55,
          171.65, 186.86,
        ],
      },
      {
        name: "Robotic Process Automation (RPA)",
        data: [
          0.5, 0.607, 0.736, 0.893, 1.083, 1.314, 1.594, 1.936, 2.35, 2.851,
          3.46,
        ],
      },
      {
        name: "5G Technology",
        data: [11, 32, 45, 32, 34, 52, 41, 50, 57, 60, 200],
      },
      {
        name: "Internet of Things (IoT)",
        data: [
          0.0001, 0.0001287, 0.0001655, 0.0002127, 0.0002733, 0.0003513,
          0.0004513, 0.0005796, 0.0007446, 0.0009556, 0.001225,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Top Technologies",
        align: "left",
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "text",
        categories: [
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
        ],
      },
      tooltip: {
        x: {
          format: "text",
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default AreaChart;
