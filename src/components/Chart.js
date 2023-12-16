import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomChart = ({ chartData }) => {
  const [selectedTab, setSelectedTab] = useState('nps_score_timeline');

  const selectedTimelineData = chartData.data.chart_data[selectedTab].points;

  const data = selectedTimelineData.map((point) => {
    const date = Object.keys(point)[0];
    const value = point[date];
    return { date, value };
  });

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Customer Feedback</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <button onClick={() => setSelectedTab('nps_score_timeline')}>NPS Score</button>
        <button onClick={() => setSelectedTab('nps_response_timeline')}>NPS Responses</button>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomChart;
