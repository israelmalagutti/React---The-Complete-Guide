import React from "react";

const ExpenseItem = ({ date, expenseType, value }) => {
  return (
    <div>
      <div>{date || "March 28th 2021"}</div>
      <div>
        <h2>{expenseType || "Car Insurance"}</h2>
        <div>${value || 297.67}</div>
      </div>
    </div>
  );
};

export { ExpenseItem };
