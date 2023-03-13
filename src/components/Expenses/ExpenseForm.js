import React, { useState } from 'react';
import "./ExpenseForm.css"
const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        console.log('Setting entered title');
    }
    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
        console.log('Setting entered price');
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        console.log('Setting entered date');
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        console.log('expenseData:', expenseData)
        setEnteredTitle('')
        setEnteredPrice('')
        setEnteredDate('')
    }
    const toggleMenu = (menuState) => {
        props.toggleMenu(menuState);
    }

    return(
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"
                       onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
            <div className="new-expense__control">
                <label>price</label>
                <input type="number" min="0.01" step="0.01" onChange={priceChangeHandler} value={enteredPrice}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler} value={enteredDate}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
            <button onClick={() => toggleMenu('Closed')}>Cancel</button>
        </div>
    </form>)
}

export default ExpenseForm
