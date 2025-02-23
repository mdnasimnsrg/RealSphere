import React from "react";
import Chart from "react-apexcharts";

const StorageUtilizationChart = () => {
  const usedStorage = 30; // Example used storage
  const totalStorage = 100; // Example total storage
  const usedPercentage = ((usedStorage / totalStorage) * 100).toFixed(2); // Calculate percentage

  const options = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: ["Manager Review", "Assigned", "Completed"],
    },
    colors: ["#00A5E3", "#F44336", "#4CAF50"],
  };

  const series = [
    {
      data: [5, 0, 2],
    },
  ];
  return <Chart options={options} series={series} type="bar" height={200} />;
};

export default StorageUtilizationChart;
