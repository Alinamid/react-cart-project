import React, { useState, useEffect } from "react";
import ChartComponent from "../components/Chart";
import { chartData } from "../mock";

const ChartPage = () => {

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">NPS Score Chart</h1>
      {chartData ? <ChartComponent chartData={chartData} /> : <p>Loading chart data...</p>}
    </div>
  );
};

export default ChartPage;
