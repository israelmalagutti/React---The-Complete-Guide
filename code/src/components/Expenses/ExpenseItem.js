import "./ExpenseItem.css";

import { Card } from "../Ui";
import { ExpenseDate } from "./ExpenseDate";

const ExpenseItem = ({ date, title, price }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{title || "Car Insurance"}</h2>
        <div className="expense-item__price">${price || 297.67}</div>
      </div>
    </Card>
  );
};

export { ExpenseItem };
