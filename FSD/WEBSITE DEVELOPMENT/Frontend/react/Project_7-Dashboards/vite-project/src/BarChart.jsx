import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Annual CS Graduates",
        data: [
          100000, 185000, 215000, 17000, 30000, 20000, 15000, 12000, 10000,
          5000,
        ],
      },
      {
        name: "Estimated Annual Hires",
        data: [
          77000, 150000, 200000, 3000, 22000, 14000, 10000, 7000, 4000, 3000,
        ],
      },
      {
        name: "Avg Tuition Fees",
        data: [
          117016, 14000, 13200, 8800, 6400, 160000, 89436, 94300, 80000, 148000,
        ],
      },
      {
        name: "Estimated Avg Package",
        data: [
          110140, 15500, 8000, 11000, 53000, 42000, 60000, 70000, 22000, 37000,
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
          horizontal: false,
          columnWidth: "60%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "United States",
          "China",
          "India",
          "Russia",
          "Germany",
          "United Kingdom",
          "Canada",
          "Australia",
          "South Korea",
          "Singapore",
        ],
      },
      yaxis: {
        title: {
          text: "(thousand ,rates-$)",
        },
      },
      fill: {
        opacity: 1,
      },
      title: {
        text: "CS Graduates Analytics",
        align: "left",
      },
      tooltip: {
        y: {
          formatter: function (val, key) {
            return " " + val + " thousand";
          },
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
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarChart;
