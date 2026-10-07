import { CiCirclePlus } from "react-icons/ci";
import { useContext } from "react";
import { AppDataContext } from "../../context/AppDataContext";
import { setData } from "../../util/localStorage";

export default function AddIncomeForm({ type }) {
  const { appData, setAppData } = useContext(AppDataContext);

  const incomeCategories = [
    "Salary",
    "Freelancing",
    "Business",
    "Investments",
    "Rental",
    "Bonus",
    "Gifts",
    "Other",
  ];

  const expenseCategories = [
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Entertainment",
    "Health",
    "Education",
    "Travel",
    "Rent",
    "Other",
  ];

  const addIncome = (event, type) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const finalData = {
      ...data,
      id: crypto.randomUUID(),
      amount: Number(data.amount),
      type,
    };

    const newData = [...appData, finalData];

    setAppData(newData);

    setData(newData);

    event.target[0].value = "";
    event.target[1].value = "";
    event.target[3].value = "";
  };

  return (
    <div className="shadow-xl border border-gray-500 rounded-xl py-4 px-5">
      <div className="flex gap-2 items-center mb-5">
        <CiCirclePlus className="w-8 h-8" />
        <h1 className="text-lg">
          {type === "income" ? "Add Income" : "Add Expense"}
        </h1>
      </div>

      <form
        id={type === "income" ? "income" : "expense"}
        className="flex flex-col gap-3 text-lg"
        onSubmit={(event) => {
          addIncome(event, type);
        }}
      >
        <div className="flex flex-col">
          <label htmlFor="amount" className="text-gray-700">
            Amount
          </label>
          <input
            name="amount"
            className="border rounded-lg
                    py-1 pl-3"
            type="number"
            id="amount"
            placeholder="₹0.00"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="source" className="text-gray-700">
            {type === "income" ? "Income" : "Expense"} Source
          </label>
          <input
            name="source"
            id="source"
            className="border rounded-lg py-1 pl-3"
            type="text"
            placeholder=""
            placeholder={
              type === "income"
                ? "e.g. Freelance project, Salary..."
                : "e.g. Shopping, Travel..."
            }
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label htmlFor="category" className="text-gray-700">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="border rounded-lg py-1 pl-3"
              required
            >
              {type === "income" &&
                incomeCategories.map((category) => {
                  return (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  );
                })}

              {type === "expense" &&
                expenseCategories.map((category) => {
                  return (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="date" className="text-gray-700">
              Date
            </label>
            <input
              className="border rounded-lg py-1 pl-3"
              id="date"
              name="date"
              type="date"
              required
            />
          </div>
        </div>
        <div className="ml-auto mt-3">
          <button
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
