import dayjs from "dayjs";
import { useContext } from "react";
import { AppDataContext } from "../../context/AppDataContext";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";

export default function IncomeTransactionsCards({ type }) {
  const { appData, setAppData } = useContext(AppDataContext);

  const incomeData = appData
    .filter((data) => {
      return data.type === type;
    })
    .sort((a, b) => {
      const diffA = Math.abs(dayjs(a.date).diff(dayjs(), "day"));
      const diffB = Math.abs(dayjs(b.date).diff(dayjs(), "day"));

      return diffA - diffB;
    });

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/transactions/${id}`);

      setAppData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Failed to delete transaction:", error);
      alert("Failed to delete transaction. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-5 p-4 border border-gray-500 rounded-2xl shadow-xl">
      <p className="flex flex-col gap-5 text-xl text-gray-700 font-semibold">
        Recent {type === "income" ? "Income" : "Expense"} Transactions{" "}
        {appData.length === 0 && (
          <span className="text-black text-center text-2xl">
            No Transaction
          </span>
        )}
      </p>

      {incomeData.map((item) => {
        const formatted = dayjs(item.date).format("D MMMM, YYYY");
        return (
          <div
            key={item._id}
            className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded-md"
          >
            <div>
              <p className="font-bold">{item.source}</p>
              <p className="text-gray-700">{formatted}</p>
            </div>
            <div
              className={`flex gap-2 font-bold ${type === "income" ? "text-green-500" : "text-red-500"}`}
            >
              <p>₹{item.amount} </p>
              <button
                onClick={() => {
                  deleteTransaction(item._id);
                }}
                className="text-red-500"
              >
                <RxCrossCircled />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
