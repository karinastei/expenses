import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpenseItemContainer from "../UserInterface/ExpenseItemContainer";

function Expenses(props){
    return(
        <ExpenseItemContainer className="expenses">
            <ExpenseItem expenseData={props.expenses[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenses[1]}></ExpenseItem>
        </ExpenseItemContainer>
    )
}

export default Expenses
