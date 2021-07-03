import './expense-form.sass';


const Expenseform = () => {
  return (
    <form>

      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text"/>
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"/>
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2030-12-31"/>
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default Expenseform;