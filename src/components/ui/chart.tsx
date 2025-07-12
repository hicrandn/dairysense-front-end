"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
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
    <div
      style={{
        width: "100%",
        maxWidth: 1000,
        height: 320,
        background: "#fafafa",
        borderRadius: 16,
        padding: 12,
        margin: " auto",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 8,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <p style={{ fontWeight: 700, fontSize: 18, margin: 0 }}>Toplam Süt</p>
          <span style={{ color: "#bbb", fontSize: 15 }}>
            Sağılan Hayvan Sayısı
          </span>
          <span
            style={{
              color: "#bbb",
              fontSize: 15,
              paddingRight: 16,
              marginRight: 8,
              borderRight: "1.5px solid #E0E0E0",
              height: 20,
              display: "flex",
              alignItems: "center",
            }}
          >
            Sağım Süresi
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 15,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#222",
                display: "inline-block",
              }}
            />
            24 Saat
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#BDBDBD",
              fontSize: 15,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#BDBDBD",
                display: "inline-block",
              }}
            />
            10 Gün Ortalama
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 40, left: 0, bottom: 20 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 15, fill: "#888", dy: 18 }} // aylar aşağıya
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            ticks={[0, 10000, 20000, 30000]}
            tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}K`)}
            tick={{ fontSize: 15, fill: "#888", dx: -2 }} // y ekseni sağdan biraz içeride
          />
          <Tooltip
            contentStyle={{ borderRadius: 8, fontSize: 14 }}
            labelStyle={{ fontSize: 14 }}
          />
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF0000" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#FF0000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value24"
            stroke="#222"
            fill="url(#areaGradient)"
            fillOpacity={1}
          />
          <Line
            type="monotone"
            dataKey="value24"
            stroke="#222"
            strokeWidth={2.5}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="value10"
            stroke="#BDBDBD"
            strokeDasharray="6 6"
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
