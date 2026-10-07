import BarChartSection from "../components/home/BarChartSection";
import Header from "../components/home/Header";
import HeaderCards from "../components/home/HeaderCards";
import PieLineChartSection from "../components/home/PieLineChartSection";
import { useContext } from "react";
import { setData } from "../util/localStorage";
import { AppDataContext } from "../context/AppDataContext";

export default function HomePage() {
  const { setAppData } = useContext(AppDataContext);

  return (
    <>
      <Header></Header>

      <main className="px-5 sm:px-15 space-y-5 pb-5">
        <HeaderCards />

        <BarChartSection />

        <PieLineChartSection />
        <div className="flex justify-center">
          <button
            onClick={() => {
              setAppData([]);
              setData([]);
            }}
            className="border rounded-lg px-4 py-2 bg-red-500 text-lg text-white font-semibold"
          >
            Delete Data
          </button>
        </div>
      </main>
    </>
  );
}
