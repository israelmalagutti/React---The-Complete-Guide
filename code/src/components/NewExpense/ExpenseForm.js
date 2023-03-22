import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onCancelEditing }) => {
  const [formData, setFormData] = useState({
    enteredTitle: "",
    enteredPrice: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setFormData({
      ...formData,
      enteredTitle: event.target.value,
    });
  };

  const priceChangeHandler = (event) => {
    setFormData({
      ...formData,
      enteredPrice: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      enteredDate: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    try {
      const expenseData = {
        title: formData.enteredTitle,
        price: formData.enteredPrice,
        date: new Date(formData.enteredDate),
      };

      onSaveExpenseData(expenseData);
    } catch (error) {
      throw new Error();
    } finally {
      setFormData({
        enteredTitle: "",
        enteredPrice: "",
        enteredDate: "",
      });
    }
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={formData.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={formData.enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={formData.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={onCancelEditing}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export { ExpenseForm };
