import { useState } from "react";
import "./ExpenseItem.css";

import { Card } from "../Ui";
import { ExpenseDate } from "./ExpenseDate";

const ExpenseItem = ({ date, title, price }) => {
  const [expenseTitle, setExpenseTitle] = useState(title);

  const clickHandler = () => {
    setExpenseTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{expenseTitle || "Car Insurance"}</h2>
        <div className="expense-item__price">${price || 297.67}</div>
      </div>
      <button onClick={clickHandler}>Change expense title</button>
    </Card>
  );
};

export { ExpenseItem };
