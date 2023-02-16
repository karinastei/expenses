import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpenseItemContainer from "../UserInterface/ExpenseItemContainer";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    const filterExpenseDataHandler = (enteredFilterData) => {
        console.log(`Expenses.js changed year to ${enteredFilterData.year}`)
    }

    return (
        <ExpenseItemContainer className="expenses">
            <ExpensesFilter onSaveFilterData={filterExpenseDataHandler}></ExpensesFilter>
            {
                props.expenseData.map((expense) => {
                    return <ExpenseItem expenseData={expense}></ExpenseItem>
                })
            }
        </ExpenseItemContainer>
    )
}

export default Expenses
