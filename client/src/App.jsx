import HomePage from "./pages/HomePage";
import IncomePage from "./pages/IncomePage";
import { Routes, Route } from "react-router-dom";
import { AppDataContext } from "./context/AppDataContext";
import { useState } from "react";
import { getData } from "./util/localStorage";

export default function App() {
  const [appData, setAppData] = useState(getData() || []);

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
