import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from 'react';

const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2 className="expense-item__description">{props.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}€</div>
            </div>
        </Card>
    )
}

export default ExpenseItem
