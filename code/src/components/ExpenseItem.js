import "./ExpenseItem.css";

const ExpenseItem = ({ expenseDate, expenseTitle, expensePrice }) => {
  const date = new Date().toISOString();

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString() || date}</div>

      <div className="expense-item__description">
        <h2>{expenseTitle || "Car Insurance"}</h2>
        <div className="expense-item__price">${expensePrice || 297.67}</div>
      </div>
    </div>
  );
};

export { ExpenseItem };
