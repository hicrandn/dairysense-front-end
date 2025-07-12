"use client";

import {
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
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
    <div className="w-full h-full min-h-[320px] rounded-xl bg-gray-100 p-4 sm:p-6 lg:p-8">
      {title && (
        <h3 className="text-base sm:text-lg font-bold mb-4 text-gray-900">
          {title}
        </h3>
      )}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
        <div className="flex-1 flex justify-center w-full">
          <ResponsiveContainer
            width="100%"
            height={200}
            className="max-w-[220px]"
          >
            <RePieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                strokeWidth={2}
                stroke="#ffffff"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value}%`} />
            </RePieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col gap-2 lg:gap-3 w-full lg:min-w-[160px] lg:max-w-[200px]">
          {data.map((entry, index) => (
            <div
              key={`legend-${index}`}
              className="flex items-center justify-between w-full gap-2"
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span
                  className="w-3 h-3 rounded-full block flex-shrink-0"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-sm lg:text-base text-gray-900 font-medium truncate">
                  {entry.name}
                </span>
              </div>
              <span className="text-sm lg:text-base text-gray-900 font-medium flex-shrink-0">
                {entry.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
