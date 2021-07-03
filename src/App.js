import './sass/App.css';
import Expenses from "./components/expenses/Expenses";

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
       <Expenses items={expenses}/>
     </>
  );
}

export default App;
