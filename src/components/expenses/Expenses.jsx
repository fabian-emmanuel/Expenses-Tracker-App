import './expenses.sass';
import Card from '../card/Card';
import ExpenseFilter from "./ExpenseFilter";
import { useState } from 'react';
import ExpensesList from "./ExpenseList";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses}/>
     </Card>
  );
}

export default Expenses;