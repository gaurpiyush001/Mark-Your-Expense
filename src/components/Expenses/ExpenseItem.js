import React/*, { useState }*/ from 'react';//importing default React and named useState 
//useState is the function provided by the react library and this allows us to define values as state where changes to these values should reflect in the component function to be CALLED AGAIN
//we use/call this directly inside of the component FUNCTION
//by use state we create a special kind of value who's change in value will lead to recall of that component

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';
//COMPONENT in REACT is Written as Just a function in JS which we will then EXPORT

function ExpenseItem(props) { //in react we will be getting only one parameter and that will be an Object

//   const expenseDate = new Date();//creating Date Objects
//   const expenseTitle = 'Car Insurance';
//   const expenseAmount = 294.67;

//getting access to the values of props defined as Attributes to custom Components
// const dateLac = props.date.toLocaleString('en-US', {
//     month:'long',
//     year:'numeric',
//     day:'2-digit'
// });


  //const [title, setTitle] = useState(props.title);//assigning initial value
//1.) useState is a so called REACT-HOOK
//2.) all react-hooks start with the word **use**
//3.) useState(); wants a default state value
//4.) return kya krta hai useState()?? ---> It returns an array where first element is the current state value and the second element is the updating function 


  //To write dynamic data inside below JSX code snippets,, React gives special Syntax ie --> {}

  //let title = props.title; //Here regular variable are not triggering re-evaluation of Overall Component in which we want to set Dynamic Data,,,,,mtlb final rendering ke baad dubara Execute nhi hota react components

  // const clickHandler = () => {
  //   //title = 'Updated!';
  //   setTitle('Updated!');//ye krney se jiss component mein useState() function hoga vo dubara execute hoga changed variable state ke saath 
  //   console.log(title);
  // }

  return (
    //ek hi root element hona chahiye return statement mein mtlb JSX code mein
    
    //below Wrapper Custom Component only supports the syles that we have mentioned while it's building,
    //Custom components does not accept the className as regular HTML elements do

    <Card className="expense-item"> 
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
