"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", value24: 20000, value10: 1000 },
  { name: "Feb", value24: 9000, value10: 12000 },
  { name: "Mar", value24: 14000, value10: 18000 },
  { name: "Apr", value24: 22000, value10: 10000 },
  { name: "May", value24: 28000, value10: 17000 },
  { name: "Jun", value24: 21000, value10: 15000 },
  { name: "Jul", value24: 24000, value10: 30000 },
];

export default function Chart() {
  return (
    <div className="w-full h-full min-h-[320px] rounded-xl  ">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
        <div className="flex flex-row items-center gap-4">
          <h3 className="text-lg font-bold text-gray-900">Toplam Süt</h3>
          <span className="text-sm text-gray-400 font-normal">
            Sağılan Hayvan Sayısı
          </span>
          <span className="mx-2 text-gray-800">|</span>
          <span className="text-sm text-gray-400 font-normal">
            Sağım Süresi
          </span>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-900 rounded-full" />
            <span className="text-sm text-gray-700">24 Saat</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-300 rounded-full" />
            <span className="text-sm text-blue-400">10 Gün Ortalama</span>
          </div>
        </div>
      </div>

      <div className="w-full h-[280px]  ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 13, fill: "#B0B0B0", fontWeight: 500 }}
              padding={{ left: 20, right: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 10000, 20000, 30000]}
              tickFormatter={(value) =>
                value === 0 ? "0" : `${value / 1000}K`
              }
              tick={{ fontSize: 13, fill: "#B0B0B0", fontWeight: 500 }}
              padding={{ top: 20, bottom: 10 }}
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
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#666666" stopOpacity={0.7} />
                <stop offset="100%" stopColor="#666666" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value24"
              fill="url(#areaGradient)"
              fillOpacity={1}
            />
            <Line
              type="monotone"
              dataKey="value24"
              stroke="#222"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, stroke: "#222", strokeWidth: 2, fill: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="value10"
              stroke="#A3BFFA"
              strokeDasharray="4 4"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 5,
                stroke: "#A3BFFA",
                strokeWidth: 2,
                fill: "#fff",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
