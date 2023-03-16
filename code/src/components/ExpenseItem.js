import "./ExpenseItem.css";

const ExpenseItem = ({ expenseDate, expenseTitle, expensePrice }) => {
  const day = expenseDate.toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
  });
  const year = expenseDate.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{year}</div>
        <div>{day}</div>
      </div>

      <div className="expense-item__description">
        <h2>{expenseTitle || "Car Insurance"}</h2>
        <div className="expense-item__price">${expensePrice || 297.67}</div>
      </div>
    </div>
  );
};

export { ExpenseItem };
