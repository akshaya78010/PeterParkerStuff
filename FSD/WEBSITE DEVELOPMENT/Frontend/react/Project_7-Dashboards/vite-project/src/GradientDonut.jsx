import React from "react";
import ReactApexChart from "react-apexcharts";

const GradientDonut = () => {
  const [state, setState] = React.useState({
    series: [15, 30, 35, 20],
    options: {
      labels: ["No Job", "Internship Only", "Full-Time Role", "Apprenticeship"],
      chart: {
        width: 380,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex] + "%";
        },
      },
      title: {
        text: "Percentage Measurement of Oppoprtunities",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          width={380}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default GradientDonut;
