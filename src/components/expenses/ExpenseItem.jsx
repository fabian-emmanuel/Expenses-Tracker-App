import './expenses.sass'
import ExpenseDate from "./ExpenseDate";
import Card from "../../components/card/Card";
import { useState } from 'react';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);


  const clickHandler = () => {
    setTitle("updated");
  }

  return (
     <Card className="expense-item">
       <ExpenseDate date={props.date}/>

       <div className="expense-item_description">
         <h2>{title}</h2>
       </div>

       <div className="expense-item__price">
         ${props.amount}
       </div>

       <button onClick={clickHandler}>Change Title</button>
     </Card>
  );
}

export default ExpenseItem;