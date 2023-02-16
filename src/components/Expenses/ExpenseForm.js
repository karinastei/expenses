import React, {useState} from 'react';
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log('expenseData:', expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        console.log('Setting entered title');
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        console.log('Setting entered amount');
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        console.log('Setting entered date');
    }

    return (<form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"
                       onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler} value={enteredDate}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>)
}

export default ExpenseForm
