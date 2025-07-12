"use client";

import {
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import React from "react";

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: PieChartData[];
  title?: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, title }) => {
  return (
    <div className="w-full h-full min-h-[320px] rounded-xl bg-gray-100 p-4">
      {title && (
        <h3 className="text-lg font-bold mb-4 text-gray-900">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <RePieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={50}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(1)}%`
            }
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend />
        </RePieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
