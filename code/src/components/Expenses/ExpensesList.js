import "./ExpensesList.css";

import { ExpenseItem } from "./ExpenseItem";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          price={expense.amount}
          title={expense.title}
        />
      ))}
    </ul>
  );
};

export { ExpensesList };
