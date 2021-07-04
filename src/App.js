import './sass/App.css';
import Expenses from "./components/expenses/Expenses";
import NewExpense from './components/new-expense/NewExpense';
import {useState} from 'react';

const DUMMY_EXPENSES = [{
    id: 1,
    title: 'Car Insurance',
    amount: 356.76,
    date: new Date(2021, 5, 12)
  },
  {
    id: 2,
    title: 'Health Insurance',
    amount: 546.44,
    date: new Date(2021, 6, 15)
  },
  {
    id: 3,
    title: 'Food Insurance',
    amount: 609.78,
    date: new Date(2021, 7, 2)
  }
];

const App = () => {
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };



  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
       <Expenses items={expenses} />
     </>
  );
}

export default App;
