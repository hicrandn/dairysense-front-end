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
    <div className="w-full h-full min-h-[320px] rounded-xl bg-gray-100 p-8">
      {title && (
        <h3 className="text-lg font-bold mb-4 text-gray-900">{title}</h3>
      )}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 flex justify-center">
          <ResponsiveContainer width={220} height={220}>
            <RePieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                // Daha kalın dilimler için innerRadius küçültülüp outerRadius büyütüldü
                innerRadius={50}
                outerRadius={90}
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
        <div className="flex flex-col gap-3 min-w-[180px] md:ml-8 mt-6 md:mt-0">
          {data.map((entry, index) => (
            <div
              key={`legend-${index}`}
              className="grid grid-cols-2 items-center w-full gap-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full block"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-base text-gray-900 font-sm whitespace-nowrap ">
                  {entry.name}
                </span>
              </div>
              <span className="text-base text-gray-900 font-medium text-right">
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
