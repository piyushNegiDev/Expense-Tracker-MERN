import { useContext } from "react";
import { AppDataContext } from "../context/AppDataContext";
import Header from "../components/home/Header";
import MonthlyIncomeLineChart from "../components/income/MonthlyIncomeLineChart";
import IncomeTransactionsCards from "../components/income/IncomeTransactionsCards";
import AddIncomeForm from "../components/income/AddIncomeForm";

export default function IncomePage({ pageType }) {
  const { appData } = useContext(AppDataContext);

  return (
    <>
      <Header></Header>

      <main className="px-5 sm:px-15 gap-5 grid lg:grid-cols-[2fr_1fr] pb-5">
        <div className="space-y-5">
          <AddIncomeForm type={pageType} />

          <MonthlyIncomeLineChart appData={appData} type={pageType} />
        </div>

        <IncomeTransactionsCards type={pageType}></IncomeTransactionsCards>
      </main>
    </>
  );
}
