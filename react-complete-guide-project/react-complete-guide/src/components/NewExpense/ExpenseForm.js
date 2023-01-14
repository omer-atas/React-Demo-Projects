import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Birden fazla durumlu yaklaşım
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const { userInput, setUserInput } = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  // -> Tıklanma olayı olduğunda kullanıcının girdiği değeri almak için js kodu aşağıdaki gibidir..
  //    document.getElementById('').addEventListener('click',(event)=>{console.log(event.target.value);})
  // -> React kodu ise şu şekildedir :
  const titleChangeHandler = (event) => {
    // Listening to User Input :
    setEnteredTitle(event.target.value);
    // 2 - Bu durumda şu anki durum önceki duruma bağlı durumdadır..
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // 3- React bize sunduğu en son durum anlık görünütünü gösterir.
    // Ayrıca bu form durum güncellenmesinin önceki duruma bağlı olduğu zamanlarda kullanılmalıdır..
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // Listening to User Input :
    setEnteredAmount(event.target.value);
    // 2 - setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // Listening to User Input :
    setEnteredDate(event.target.value);
    //  2 - setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    // sunucuya istek atılmasını engellenir ve sayfa reload olmaz
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // Bu işlem kullanıcı verilerini toplamak amacıyla kullanılır..
    props.onSaveExpenseData(expenseData);

    // İki Yönlü Ciltleme =
    //  input etiketi içerisinde onChange={amountChangeHandler} ve
    //   value={enteredAmount} attribute leri kullanılarak yapılır.. Son olarak aşağıdaki işlem gerçekleştirilir.
    // Bu işlem kullanıcı verilerini temizlemek amacıyla kullanılır..
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
