import './expenses.sass'
import ExpenseDate from "./ExpenseDate";
import Card from "../../components/card/Card";

const ExpenseItem = (props) => {

  return (
    <li>
     <Card className="expense-item">
       <ExpenseDate date={props.date}/>

       <div className="expense-item_description">
         <h2>{props.title}</h2>
       </div>

       <div className="expense-item__price">
         ${props.amount}
       </div>
      </Card>
      </li>
  );
}

export default ExpenseItem;