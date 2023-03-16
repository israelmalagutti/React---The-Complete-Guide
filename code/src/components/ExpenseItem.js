import "./ExpenseItem.css";

const ExpenseItem = ({ date, expenseType, price }) => {
  return (
    <div className="expense-item">
      <div>{date || "March 28th 2021"}</div>

      <div className="expense-item__description">
        <h2>{expenseType || "Car Insurance"}</h2>
        <div className="expense-item__price">${price || 297.67}</div>
      </div>
    </div>
  );
};

export { ExpenseItem };
