import BarsChart from "./BarsChart";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useContext } from "react";
import { AppDataContext } from "../../context/AppDataContext";

export default function BarChartSection() {
  const { appData } = useContext(AppDataContext);
  dayjs.extend(advancedFormat);

  const nearestFour = [...appData]
    .sort((a, b) => {
      const diffA = Math.abs(dayjs(a.date).diff(dayjs(), "day"));
      const diffB = Math.abs(dayjs(b.date).diff(dayjs(), "day"));

      return diffA - diffB;
    })
    .slice(0, 4);

  return (
    <section className="grid min-[1000px]:grid-cols-[2.5fr_1fr] gap-5">
      <div className="space-y-5 p-4 border border-gray-500 rounded-2xl shadow-xl">
        <p className="text-xl font-semibold text-gray-700">
          Yearly Financial Summary
        </p>
        <BarsChart />
      </div>

      <div className="flex flex-col gap-4 p-4 border border-gray-500 rounded-2xl shadow-xl">
        <p className="text-xl font-semibold text-gray-700">
          Recent Transactions
        </p>

        {appData.length === 0 && (
          <p className="text-black text-center text-2xl">No Transaction</p>
        )}

        {nearestFour.map((item) => {
          const formatted = dayjs(item.date).format("Do MMMM, YYYY");
          return (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded-md"
            >
              <div>
                <p className="font-bold">{item.source}</p>
                <p className="text-gray-700">{formatted}</p>
              </div>
              <div
                className={`font-bold ${
                  item.type === "expense" ? "text-red-500" : "text-green-500"
                }`}
              >
                ₹{item.amount}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
