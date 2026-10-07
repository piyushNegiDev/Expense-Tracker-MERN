import PieChartData from "./PieChartData";
import ExpenseLineChart from "./ExpenseLineChart";
import { getMonthlyTotal } from "../../util/getMonthlyTotal";
import { useContext } from "react";
import { AppDataContext } from "../../context/AppDataContext";
import dayjs from "dayjs";

export default function PieLineChartSection() {
  const { appData } = useContext(AppDataContext);
  const income = getMonthlyTotal(appData, "income", dayjs());
  const expense = getMonthlyTotal(appData, "expense", dayjs());
  const savings = income - expense;

  const data = [
    { name: "Income", value: income, fill: "#0088FE" },
    { name: "Expense", value: expense, fill: "#00C49F" },
    { name: "Savings", value: savings, fill: "#FFBB28" },
  ];

  return (
    <section className="grid gap-5 min-[685px]:grid-cols-[1fr_2fr]">
      <div className="border border-gray-500 rounded-2xl min-[410px]:max-[685px]:grid grid-cols-[2fr_1fr] justify-center items-center shadow-xl">
        <PieChartData data={appData.length === 0 ? [] : data}></PieChartData>

        <div className="px-4 pb-2 flex flex-col divide-y-3 divide-gray-500">
          {data.map((item) => {
            return (
              <p key={item.name} className="flex gap-2 items-center py-2">
                <span
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: item.fill }}
                ></span>{" "}
                <span>{item.name}</span>
                <span
                  className={item.value < 0 ? "text-red-500" : " text-black"}
                >
                  ₹{item.value}
                </span>
              </p>
            );
          })}
        </div>
      </div>

      <div className="p-4 border border-gray-500 rounded-2xl flex flex-col justify-between shadow-xl">
        <p className="ml-10 text-gray-700 text-xl font-semibold">
          Income & Expense Trend
        </p>
        <ExpenseLineChart appData={appData}></ExpenseLineChart>
      </div>
    </section>
  );
}
