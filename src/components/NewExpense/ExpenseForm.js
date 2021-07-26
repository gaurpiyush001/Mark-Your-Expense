import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (e) => {
      setEnteredTitle(e.target.value);
      console.log('title changed!');

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });

  }; 

  const amountChangeHandler = (e) =>{
    setEnteredAmount(e.target.value);
    console.log('amount changed!');

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    console.log('date changed!');

    
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

  }

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    //console.log(expenseData);

    props.onSaveExpenseData(expenseData);

    //--->>__TWO WAY BINDING__<<--- (To delete the input when the form has submitted)
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label> 
          <input type="number" min="1" value={enteredAmount} steps="1" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" value={enteredDate} max="2023-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div>
        <button className="new-expense__actions" type="button" onClick={props.onCancel}>Cancel</button>
        <button className="new-expense__actions" type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
