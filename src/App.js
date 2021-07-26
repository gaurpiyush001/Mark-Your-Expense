import React, { useState } from "react";
import "./App.css";
//import Card from "./components/UI/Card";
//import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
//import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Expense from "./components/Expenses/Expenses";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450,
    date: new Date(2021, 5, 1),
  },
];


function App() {
  // const expenses = [
  //   { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  //   { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  //   { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  // ];

  const [expenses , setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);

    //setExpenses([expense, ...expenses]);//proper work nhi krega kyunki previous state pr depend krri hai new value

    setExpenses((expenses) => {
      return [expense, ...expenses];
    });

  };

  //this 👇 below is the alternative of writing JSX code with React object and its method createElement

  //JSX code jb bhi likhtey hai toh ye React.createElement method call hota hai hr baari

  //return React.createElement(//custom or standard HTML element, //{options for configuring i.e attributes}, herre is the content between elements-->React.createElement('header', {className:App-header}))

  return (
    //this below code is waht we call-: JSX (JavaScript XML)

    <div className="App-header">
      {/* <p className="App-link">Let's Get Started With React</p> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={expenses} />
    </div>
  );
}

export default App;
