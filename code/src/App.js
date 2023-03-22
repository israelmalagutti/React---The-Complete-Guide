import { useState } from "react";
import { Expenses } from "./components/Expenses";
import { NewExpense } from "./components/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 3, 9),
  },
  {
    id: "e2",
    title: "Grocery shopping",
    amount: 300,
    date: new Date(2023, 2, 7),
  },
  {
    id: "e3",
    title: "Electricty bill",
    amount: 80,
    date: new Date(2023, 2, 4),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 1, 18),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    console.log("In App Js", expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
