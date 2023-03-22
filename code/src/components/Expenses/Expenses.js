import { useState } from "react";

import "./Expenses.css";

import { ExpenseItem } from "./ExpenseItem";
import { ExpenseFilter } from "./ExpenseFilter";
import { Card } from "../Ui";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    // Debbug
    console.log("Selected Year", selectedYear);
    console.log("Filtered Year", filteredYear, " - State");
    console.log("Filtered Expenses", filteredExpenses, " - State");
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeExpenseFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          price={expense.amount}
          title={expense.title}
        />
      ))}
    </Card>
  );
};

export { Expenses };
