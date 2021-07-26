import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
//import ExpenseItem from "./ExpenseItem";
// import "./ExpenseItem";
// import "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);

    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>

        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found.☹</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        <ExpensesList item={filteredExpenses}/>


        {/* <ExpenseItem //this is almost like a function call or we can say that we make react aware of the ExpenseItem function
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        ></ExpenseItem> */}

      </Card>
    </div>
  );
};

export default Expenses;
