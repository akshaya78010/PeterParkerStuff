import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "JavaScript",
        data: [
          9790000, 12070000, 12360000, 15360000, 16270000, 16930000, 18360000,
          18940000, 19080000, 19310000, 20460000,
        ],
        trend: "Consistently the most used language, core to web development.",
      },
      {
        name: "Python",
        data: [
          4280000, 4770000, 6400000, 8670000, 9460000, 11020000, 13020000,
          13980000, 14640000, 15810000, 17950000,
        ],
        trend: "Massive growth due to AI, ML, and data science.",
      },
      {
        name: "Java",
        data: [
          6730000, 7540000, 7940000, 8050000, 9860000, 8500000, 9530000,
          9660000, 9060000, 9400000, 9120000,
        ],
        trend:
          "Maintaining a strong base in enterprise and Android development, but declining proportionally.",
      },
      {
        name: "C++",
        data: [
          3710000, 4000000, 4460000, 5130000, 5280000, 5480000, 5620000,
          6150000, 6120000, 7130000, 7290000,
        ],
        trend:
          "Steady, reliable usage in high-performance, system-level, and gaming development.",
      },
      {
        name: "C",
        data: [
          2950000, 2950000, 3800000, 4400000, 3960000, 4680000, 4910000,
          5590000, 5280000, 6290000, 6820000,
        ],
        trend:
          "Core system programming language; usage fluctuating but maintaining importance.",
      },
      {
        name: "C#",
        data: [
          5690000, 5890000, 6820000, 7570000, 7420000, 6880000, 8180000,
          8030000, 8340000, 8370000, 8620000,
        ],
        trend:
          "Stable presence with steady usage, driven by .NET and game development (Unity).",
      },
      {
        name: "TypeScript",
        data: [
          0, 0, 940000, 2710000, 4150000, 6350000, 7560000, 10100000, 11400000,
          11940000, 13520000,
        ],
        trend:
          "Explosive growth as the preferred standard for large-scale JavaScript projects.",
      },
      {
        name: "PHP",
        data: [
          5350000, 5890000, 5700000, 5810000, 6340000, 5730000, 5910000,
          5130000, 5760000, 5640000, 5860000,
        ],
        trend:
          "Gradual decline from former dominance, retained by major web platforms like WordPress.",
      },
      {
        name: "Go",
        data: [
          0, 300000, 400000, 700000, 1100000, 2800000, 3700000, 4800000,
          5400000, 5700000, 6800000,
        ],
        trend: "Rising slowly; popular in backend and cloud infrastructure.",
      },
      {
        name: "Ruby",
        data: [
          1400000, 1500000, 1600000, 1800000, 1900000, 2000000, 2100000,
          2200000, 2300000, 2400000, 2500000,
        ],
        trend: "Steady decline after 2015; Rails ecosystem stable but aging.",
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 3,
      },
      title: {
        text: "Top Programming Languages",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
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
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default LineChart;
