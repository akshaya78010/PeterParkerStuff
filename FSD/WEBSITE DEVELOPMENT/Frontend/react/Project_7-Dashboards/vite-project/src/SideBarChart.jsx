import React from "react";
import ReactApexChart from "react-apexcharts";

const SideBarChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        data: [
          54.4, 63.5, 61.8, 69.8, 67.8, 67.7, 68.0, 65.3, 63.6, 62.3, 66.0,
        ],
      },
      {
        data: [
          54.4, 60.1, 61.8, 64.6, 63.5, 59.8, 56.0, 52.8, 52.3, 52.9, 61.9,
        ],
      },
      {
        data: [
          48.0, 49.1, 51.2, 57.0, 54.4, 55.7, 56.6, 52.3, 52.3, 51.0, 58.6,
        ],
      },
      {
        data: [
          23.8, 25.1, 32.0, 39.4, 39.4, 44.1, 48.2, 48.2, 48.8, 51.0, 57.9,
        ],
      },
      {
        data: [0.0, 0.0, 4.7, 12.3, 17.3, 25.4, 28.0, 34.8, 38.0, 38.5, 43.6],
      },
      {
        data: [
          37.4, 39.7, 39.7, 36.6, 41.1, 34.0, 35.3, 33.3, 30.2, 30.3, 29.4,
        ],
      },
      {
        data: [
          31.6, 31.0, 34.1, 34.4, 30.9, 27.5, 30.3, 27.7, 27.8, 27.1, 27.8,
        ],
      },
      {
        data: [
          20.6, 21.0, 22.3, 23.3, 22.0, 21.9, 20.8, 21.2, 20.4, 23.0, 23.5,
        ],
      },
      {
        data: [
          29.7, 31.0, 28.5, 26.4, 26.4, 22.9, 21.9, 17.7, 19.2, 18.2, 18.9,
        ],
      },
      {
        data: [
          16.4, 15.5, 19.0, 20.0, 16.5, 18.7, 18.2, 19.3, 17.6, 20.3, 22.0,
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "JavaScript",
          "HTML/CSS",
          "SQL",
          "Python",
          "TypeScript",
          "Java",
          "C#",
          "C++",
          "C",
          "PHP",
        ],
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default SideBarChart;
