"use client";

import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";
import React from "react";

interface BarChartData {
  name: string;
  value: number;
  color: string;
}

interface BarChartProps {
  data: BarChartData[];
  title?: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, title }) => {
  return (
    <div className="w-full h-full min-h-[320px] rounded-xl bg-gray-100 p-8">
      {title && (
        <h3 className="text-lg font-bold mb-4 text-gray-900">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={280}>
        <ReBarChart data={data} margin={{ top: 10, right: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 13, fill: "#B0B0B0", fontWeight: 500 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}K`)}
            tick={{ fontSize: 13, fill: "#B0B0B0", fontWeight: 500 }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 4,
              fontSize: 13,
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              boxShadow: "none",
              padding: 8,
            }}
            labelStyle={{ fontSize: 13 }}
          />
          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
            barSize={30}
            activeBar={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
