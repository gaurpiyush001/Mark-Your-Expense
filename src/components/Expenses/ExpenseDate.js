import './ExpenseDate.css';
import Card from "../UI/Card";

function ExpenseDate(props){
    // console.log(props.date.toLocaleString('en-IN',{
    //     month:'long',
    //     year:'numeric',
    //     day:'2-digit'
    // }));
    const dateLac = props.date.toLocaleString('en-IN', {
        month:'long',
        year:'numeric',
        day:'2-digit'
    });

    //const classes = "card " + props.className;

    return (
        <Card className="expense-date">{dateLac}</Card>
    )
};

export default ExpenseDate;