import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const initialData = [
  { month: 'Jan', sales: 400 },
  { month: 'Feb', sales: 600 },
  { month: 'Mar', sales: 800 },
  { month: 'Apr', sales: 1200 },
  { month: 'May', sales: 1500 },
  { month: 'Jun', sales: 1700 },
];

const Analytics = () => {
  const [data, setData] = useState(initialData);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sales Analytics</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
