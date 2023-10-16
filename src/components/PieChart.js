// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  return (
    <div className="relative w-64 h-64">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-2xl font-bold">{data.reduce((a, b) => a + b, 0)} Users</p>
      </div>
      <Pie data={{ labels: ['Label 1', 'Label 2', 'Label 3'], datasets: [{ data }]}} />
    </div>
  );
};

export default PieChart;
