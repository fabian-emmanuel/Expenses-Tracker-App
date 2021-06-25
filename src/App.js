import './sass/App.css';
import ExpenseItem from "./components/Items/ExpenseItem";

function App() {
  const expenses = [
    {
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
  ]
  return (
     <>
       <ExpenseItem title={expenses[0].title}
                    amount={expenses[0].amount}
                    date={expenses[0].date}/>

       <ExpenseItem title={expenses[1].title}
                    amount={expenses[1].amount}
                    date={expenses[1].date}/>

       <ExpenseItem title={expenses[2].title}
                    amount={expenses[2].amount}
                    date={expenses[2].date}/>
     </>
  );
}

export default App;
