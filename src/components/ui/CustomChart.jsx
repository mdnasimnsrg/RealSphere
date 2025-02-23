import React from "react";
import Chart from "react-apexcharts";

const CustomChart = ({
  title = "Chart Title",
  data = [],
  categories = [], // optional
  xAxisLabels = [],
  yAxisLabels = [],
  labels = [],
  toolbar = true,
  tooltip = true,
  legend = true,
  legendPosition = "bottom",
  chartType = "line",
  height = 300,
  width = "100%",
  colors = ["#008FFB", "#00E396", "#FEB019"],
  zoom = false,
  yaxisFormatter = (value) => value,
  tooltipFormatter = (value) => value,
  yaxisStyle = { colors: "#8e8da4", fontSize: "12px" },
  orientation = "vertical",
  distributedBars = false,
  barSpacing,
  ...otherProps
}) => {
  const isVertical = orientation === "vertical";

  const options = {
    chart: {
      type: chartType,
      toolbar: {
        show: toolbar,
      },
      height: height,
      width: width,
      zoom: { enabled: zoom },
    },
    title: {
      text: title,
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: tooltip,
      y: {
        formatter: tooltipFormatter,
      },
    },
    legend: {
      show: legend,
      position: legendPosition,
      horizontalAlign: "center", // Align legend horizontally
    },
    xaxis: {
      categories: categories.length > 0 ? categories : xAxisLabels,
      labels: {
        rotate: isVertical ? 0 : 90,
      },
    },
    yaxis: {
      labels: {
        formatter: yaxisFormatter,
        style: yaxisStyle,
      },
    },
    labels: labels,
    colors: colors,
    plotOptions: {
      bar: {
        horizontal: !isVertical,
        distributed: distributedBars,
      },
    },
    ...otherProps
  };

  return (
    <div>
      <Chart
        options={options}
        series={data}
        type={chartType}
        height={height}
        width={width}
      />
    </div>
  );
};

export default CustomChart;
