import "./Expenses.css";

import { ExpenseItem } from "./ExpenseItem";

const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((expense, id) => (
        <ExpenseItem
          key={id}
          date={expense.date}
          price={expense.amount}
          title={expense.title}
        />
      ))}
    </div>
  );
};

export { Expenses };
