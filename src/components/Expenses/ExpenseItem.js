import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import ExpenseItemContainer from "../UserInterface/ExpenseItemContainer";

function ExpenseItem(props) {
    return (
        <ExpenseItemContainer className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}€</div>
            </div>
        </ExpenseItemContainer>
    )
}

export default ExpenseItem
