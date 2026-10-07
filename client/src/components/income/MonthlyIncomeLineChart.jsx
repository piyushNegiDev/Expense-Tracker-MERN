import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import dayjs from "dayjs";

export default function MonthlyIncomeLineChart({ appData, type }) {
  const startOfMonth = dayjs().startOf("month");

  const daysInMonth = dayjs().daysInMonth();

  const currentMonthIncome = appData.filter(
    (item) => item.type === type && dayjs(item.date).isSame(dayjs(), "month"),
  );

  const monthlyIncomeData = Array.from({ length: daysInMonth }, (_, index) => {
    const currentDate = startOfMonth.add(index, "day");

    const formattedDate = currentDate.format("DD");

    const totalIncome = currentMonthIncome
      .filter((item) => dayjs(item.date).isSame(currentDate, "day"))
      .reduce((sum, item) => sum + item.amount, 0);

    return {
      date: formattedDate,
      amount: totalIncome,
    };
  });

  return (
    <div className="shadow-xl space-y-5 p-4 border border-gray-500 rounded-xl">
      <p className="text-xl text-gray-700 font-semibold">
        Monthly {type === "income" ? "Income" : "Expense"}
      </p>
      <div className="w-full h-100">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={monthlyIncomeData} margin={{ right: 20 }}>
            <CartesianGrid strokeDasharray="5 5" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="amount"
              stroke="#3b82f6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
