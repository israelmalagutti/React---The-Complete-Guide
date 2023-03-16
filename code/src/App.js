import { ExpenseItem } from "./components";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2023, 3, 9) },
    { title: "Grocery shopping", amount: 300, date: new Date(2023, 2, 7) },
    { title: "Electricty bill", amount: 80, date: new Date(2023, 2, 4) },
    { title: "New Desk (Wooden)", amount: 450, date: new Date(2023, 1, 18) },
  ];

  return (
    <div>
      <h2>Let's get started y'all!!</h2>
      {expenses.map((expense, id) => (
        <ExpenseItem
          key={id}
          expenseDate={expense.date}
          expensePrice={expense.amount}
          expenseTitle={expense.title}
        />
      ))}
    </div>
  );
}

export default App;
