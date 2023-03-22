import "./NewExpense.css";

import { ExpenseForm } from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState();
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const showForm = isEditing ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseHandler}
      onCancelEditing={stopEditingHandler}
    />
  ) : (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );

  return <div className="new-expense">{showForm}</div>;
};

export { NewExpense };
