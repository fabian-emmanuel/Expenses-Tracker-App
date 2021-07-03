import './new-expense.sass';
import Expenseform from './ExpenseForm';


const NewExpense = () => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString
    };

    console.log(expenseData);
  }

  return <div className="new-expense">
    <Expenseform onSaveExpenseData={saveExpenseDataHandler} /> 
  </div>
}

export default NewExpense;