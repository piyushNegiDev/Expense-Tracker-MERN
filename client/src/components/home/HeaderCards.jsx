import { useContext } from "react";
import { FaDollarSign } from "react-icons/fa";
import { AppDataContext } from "../../context/AppDataContext";
import { getMonthlyTotal } from "../../util/getMonthlyTotal";
import dayjs from "dayjs";

export default function HeaderCards() {
  const { appData } = useContext(AppDataContext);

  const getIncomeOrExpense = (type) => {
    return getMonthlyTotal(appData, type, dayjs());
  };

  const previousMonthIncomeOrExpense = (type) => {
    return getMonthlyTotal(appData, type, dayjs().subtract(1, "month"));
  };

  const mostSpending = (type) => {
    const filteredExpenses = appData.filter((data) => {
      return (
        data.type === "expense" && dayjs(data.date).isSame(dayjs(), "month")
      );
    });

    const categoryTotals = {};

    filteredExpenses.forEach((item) => {
      if (categoryTotals[item.category]) {
        categoryTotals[item.category] += item.amount;
      } else {
        categoryTotals[item.category] = item.amount;
      }
    });

    let highestCategory = "";
    let highestAmount = 0;

    for (const category in categoryTotals) {
      if (categoryTotals[category] > highestAmount) {
        highestAmount = categoryTotals[category];
        highestCategory = category;
      }
    }

    if (type === "amount") {
      return highestAmount;
    }

    if (!highestCategory) {
      return "No Expense";
    }

    if (type === "category") {
      return highestCategory;
    }
  };

  const getPercent = (type) => {
    if (!previousMonthIncomeOrExpense(type) && !getIncomeOrExpense(type)) {
      return 0;
    }
    if (!previousMonthIncomeOrExpense(type)) {
      return 100;
    }
    if (!getIncomeOrExpense(type)) {
      return -100;
    }
    const percent =
      ((getIncomeOrExpense(type) - previousMonthIncomeOrExpense(type)) /
        previousMonthIncomeOrExpense(type)) *
      100;

    return percent.toFixed(1);
  };

  const getSavingsGrowthPercent = () => {
    const currentIncome = getMonthlyTotal(appData, "income", dayjs());
    const currentExpense = getMonthlyTotal(appData, "expense", dayjs());
    const previousIncome = getMonthlyTotal(
      appData,
      "income",
      dayjs().subtract(1, "month"),
    );
    const previousExpense = getMonthlyTotal(
      appData,
      "expense",
      dayjs().subtract(1, "month"),
    );

    const currentSavings = currentIncome - currentExpense;
    const previousSavings = previousIncome - previousExpense;

    if (previousSavings === 0 && currentSavings === 0) return 0;
    if (previousSavings === 0 && currentSavings > 0) return 100;
    if (currentSavings === 0 && previousSavings > 0) return -100;

    return (
      ((currentSavings - previousSavings) / previousSavings) *
      100
    ).toFixed(1);
  };

  return (
    <section className="grid max-[376px]:grid-cols-1 grid-cols-2 md:grid-cols-4 gap-5">
      <div className="shadow-xl group transition-all hover:bg-blue-500 hover:text-white flex flex-col gap-2 p-4 border rounded-2xl border-gray-500 bg-slate-50">
        <FaDollarSign className="transition-all group-hover:text-white text-blue-500 text-3xl" />
        <span className="text-gray-500 group-hover:text-black transition-all">
          Total Income
        </span>
        <span className="text-xl font-bold">
          ₹{getIncomeOrExpense("income")}
        </span>
        <span className="font-medium">
          <span
            className={`${
              getPercent("income") === 0
                ? "text-black"
                : getPercent("income") > 0
                  ? "text-green-500"
                  : "text-red-500"
            }`}
          >
            {getPercent("income")}%
          </span>{" "}
          vs last month
        </span>
      </div>

      <div className="shadow-xl group transition-all hover:bg-blue-500 hover:text-white flex flex-col gap-2 p-4 border rounded-2xl border-gray-500 bg-slate-50">
        <FaDollarSign className="transition-all group-hover:text-white text-blue-500 text-3xl" />
        <span className="text-gray-500 group-hover:text-black transition-all">
          Total Expense
        </span>
        <span className="text-xl font-bold">
          ₹{getIncomeOrExpense("expense")}
        </span>
        <span className="font-medium">
          <span
            className={`${
              getPercent("expense") === 0
                ? "text-black"
                : getPercent("expense") > 0
                  ? "text-red-500"
                  : "text-green-500"
            }`}
          >
            {getPercent("expense")}%
          </span>{" "}
          vs last month
        </span>
      </div>

      <div className="shadow-xl group transition-all hover:bg-blue-500 hover:text-white flex flex-col gap-2 p-4 border rounded-2xl border-gray-500 bg-slate-50">
        <FaDollarSign className="transition-all group-hover:text-white text-blue-500 text-3xl" />
        <span className="text-gray-500 group-hover:text-black transition-all">
          Total Saving
        </span>
        <span className="text-xl font-bold">
          ₹{getIncomeOrExpense("income") - getIncomeOrExpense("expense")}
        </span>
        <span className="font-medium">
          <span
            className={`${
              getSavingsGrowthPercent() === 0
                ? "text-black"
                : getSavingsGrowthPercent() > 0
                  ? "text-green-500"
                  : "text-red-500"
            }`}
          >
            {getSavingsGrowthPercent()}%
          </span>{" "}
          vs last month
        </span>
      </div>

      <div className="shadow-xl group transition-all hover:bg-blue-500 hover:text-white flex flex-col gap-2 p-4 border rounded-2xl border-gray-500 bg-slate-50">
        <FaDollarSign className="transition-all group-hover:text-white text-blue-500 text-3xl" />
        <span className="text-gray-500 group-hover:text-black transition-all">
          Most Spending
        </span>
        <span className="text-xl font-bold">{mostSpending("category")}</span>
        <span className="font-medium">₹{mostSpending("amount")}</span>
      </div>
    </section>
  );
}
