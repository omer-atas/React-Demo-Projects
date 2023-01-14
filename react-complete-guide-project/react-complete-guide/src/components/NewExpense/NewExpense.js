import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [control, setcontrol] = useState(false);
  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // Aşağıdaki kod kullanılarak verileri kaldırıyoruz yani çocuktan ebebeyne gönderme yapıyoruz..
    props.onAddExpense(expenseData);
  };
  const addNewExpense = () => {
    setcontrol(true);
    console.log(control);
  };
  return (
    <div className="new-expense">
      {control ? (
        <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
      ) : (
        <div className="add-new-expense">
          <button type="submit" onClick={addNewExpense}>
            Add Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
