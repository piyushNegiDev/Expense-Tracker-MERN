import BarChartSection from "../components/home/BarChartSection";
import Header from "../components/home/Header";
import HeaderCards from "../components/home/HeaderCards";
import PieLineChartSection from "../components/home/PieLineChartSection";
import { useContext } from "react";
import { AppDataContext } from "../context/AppDataContext";
import axios from "axios";

export default function HomePage() {
  const { setAppData } = useContext(AppDataContext);

  const deleteAllTransactions = async () => {
    try {
      await axios.delete("http://localhost:8000/api/transactions");

      setAppData([]);
    } catch (error) {
      console.error("Failed to delete transactions:", error);
      alert("Failed to delete transactions. Please try again.");
    }
  };

  return (
    <>
      <Header></Header>

      <main className="px-5 sm:px-15 space-y-5 pb-5">
        <HeaderCards />

        <BarChartSection />

        <PieLineChartSection />
        <div className="flex justify-center">
          <button
            onClick={deleteAllTransactions}
            className="border rounded-lg px-4 py-2 bg-red-500 text-lg text-white font-semibold"
          >
            Delete Data
          </button>
        </div>
      </main>
    </>
  );
}
