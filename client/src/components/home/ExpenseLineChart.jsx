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
import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(isoWeek);

export default function ExpenseLineChart({ appData }) {
  const startOfWeek = dayjs().startOf("isoWeek");

  const currentWeekExpenses = appData.filter((item) =>
    dayjs(item.date).isSame(dayjs(), "isoWeek"),
  );

  const weeklyExpenseData = Array.from({ length: 7 }, (_, index) => {
    const currentDate = startOfWeek.add(index, "day");

    const formattedDate = currentDate.format("DD MMM").toUpperCase();

    const totalExpense = currentWeekExpenses
      .filter(
        (item) =>
          item.type === "expense" &&
          dayjs(item.date).isSame(currentDate, "day"),
      )
      .reduce((sum, item) => sum + item.amount, 0);

    const totalIncome = currentWeekExpenses
      .filter(
        (item) =>
          item.type === "income" && dayjs(item.date).isSame(currentDate, "day"),
      )
      .reduce((sum, item) => sum + item.amount, 0);

    return {
      date: formattedDate,
      Expense: totalExpense,
      Income: totalIncome,
    };
  });

  return (
    <div className="w-full h-100">
      <ResponsiveContainer width="100%" height="400">
        <LineChart data={weeklyExpenseData} margin={{ right: 20 }}>
          <CartesianGrid />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Expense"
            stroke="red"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="Income"
            stroke="green"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
