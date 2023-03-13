import React, {useState} from 'react';
import "./NewExpense.css"

import ExpenseForm from "../Expenses/ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const [usability, setUsability] = useState('Closed')

    const toggleMenu = (menuState) => {
        setUsability(menuState)
        return usability
    }

    return (
        <div className="new-expense">
            {usability === 'Closed' && <button onClick={() => toggleMenu('Open')}>Add new Expense</button>}
            {usability === 'Open' &&
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleMenu={toggleMenu}></ExpenseForm>}
        </div>
    )
}
export default NewExpense
