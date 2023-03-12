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
    const [usability, setUsability] = useState('unusable')

    const toggleMenu = (menuState) => {setUsability(menuState)
        return usability
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
            {usability === 'unusable' && (
                <button onClick={() => toggleMenu('usable')}>
                    Add new Expense
                </button>
            )}

            {usability === 'usable' && (
                <ExpenseForm
                    onSaveExpenseData = {saveExpenseDataHandler}
                    toggleMenu = {toggleMenu}
                />
            )}

        </div>
    )
}
export default NewExpense
