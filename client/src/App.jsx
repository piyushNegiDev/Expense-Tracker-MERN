import HomePage from "./pages/HomePage";
import IncomePage from "./pages/IncomePage";
import { Routes, Route } from "react-router-dom";
import { AppDataContext } from "./context/AppDataContext";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/transactions",
        );

        setAppData(response.data);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      }
    };

    getTransactions();
  }, []);

  return (
    <AppDataContext.Provider value={{ appData, setAppData }}>
      <div className="bg-blue-50">
        <Routes>
          <Route index element={<HomePage />}></Route>

          <Route
            path="/income"
            element={<IncomePage pageType={"income"} />}
          ></Route>

          <Route
            path="/expense"
            element={<IncomePage pageType={"expense"} />}
          ></Route>
        </Routes>
      </div>
    </AppDataContext.Provider>
  );
}
