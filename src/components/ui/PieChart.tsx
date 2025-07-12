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
    <div className="w-full h-full min-h-[320px] rounded-xl bg-gray-100 p-3 sm:p-4 md:p-6 lg:p-8">
      {title && (
        <h3 className="text-lg font-bold mb-4 text-gray-900">{title}</h3>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 items-center justify-center w-full max-w-4xl">
        <div className="flex justify-center w-full">
          <ResponsiveContainer
            width="100%"
            height={180}
            className="max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[200px]"
          >
            <RePieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={50}
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
        <div className="grid grid-cols-1 gap-2 w-full">
          {data.map((entry, index) => (
            <div
              key={`legend-${index}`}
              className="flex items-center justify-between w-full gap-2"
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span
                  className="w-3 h-3 lg:w-2 lg:h-2 rounded-full block flex-shrink-0"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-sm lg:text-sm xl:text-xs 2xl:text-xs text-gray-900 font-medium truncate">
                  {entry.name}
                </span>
              </div>
              <span className="text-sm lg:text-sm xl:text-xs 2xl:text-xs text-gray-900 font-medium flex-shrink-0">
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
