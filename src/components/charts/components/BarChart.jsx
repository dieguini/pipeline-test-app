import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart(props) {
  const data = {
    labels: props.labels || [],
    datasets: [
      {
        label: props.label || "Bar Chart",
        data: props.data || [],
        backgroundColor: [
          "#AEB8FE",
          "#758BFD",
          "#FFE201",
          "#FF8600",
          "#27187E",
        ],
        borderColor: props.borderColor || "#27187E",
        borderWidth: props.borderWidth || 0,
      },
    ],
  };
  return (
    <Bar
      data={data}
      width={props.width || 1000}
      height={props.height || 500}
      options={props.options || { maintainAspectRatio: false }}
    />
  );
}

export default BarChart;
