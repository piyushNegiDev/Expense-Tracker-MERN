"use client";
import { useContext } from "react";
import dayjs from "dayjs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { AppDataContext } from "../../context/AppDataContext";

export default function BarsChart() {
  const { appData } = useContext(AppDataContext);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const expenseData = appData.filter((item) =>
    dayjs(item.date).isSame(dayjs(), "year"),
  );

  const initialData = months.map((month) => ({
    month,
    Expense: 0,
    Income: 0,
  }));

  const testData = expenseData.reduce((acc, item) => {
    const monthIndex = dayjs(item.date).month();
    if (item.type === "expense") {
      acc[monthIndex].Expense += item.amount;
    } else {
      acc[monthIndex].Income += item.amount;
    }

    return acc;
  }, initialData);

  return (
    <div className="h-[calc(100%-24px)]">
      <ResponsiveContainer width="100%" height="320" minHeight={300}>
        <BarChart
          height={100}
          width={100}
          data={testData}
          margin={{ right: 16, bottom: 16 }}
        >
          <YAxis></YAxis>
          <XAxis dataKey="month"></XAxis>
          <CartesianGrid strokeDasharray="5 5" />
          <Tooltip />

          <Legend />
          <Bar
            type="monotone"
            dataKey="Expense"
            fill="red"
            // activeBar={{ fill: "pink", stroke: "blue" }}
            radius={[10, 10, 0, 0]}
            background
          />
          <Bar
            type="monotone"
            dataKey="Income"
            fill="green"
            // activeBar={{ fill: "pink", stroke: "blue" }}
            radius={[10, 10, 0, 0]}
            background
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// const CustomToolTip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div>
//         <p>{label}</p>
//         <p>{payload[0].value}</p>
//       </div>
//     );
//   }
// };
