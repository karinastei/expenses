import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    const filterExpenseDataHandler = (enteredFilterData) => {
        console.log(`Expenses.js changed year to ${enteredFilterData.year}`)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onSaveFilterData={filterExpenseDataHandler}></ExpensesFilter>
            {
                props.expenseData.map((expenses) => {
                    return <ExpenseItem expenseData={expenses}></ExpenseItem>
                })
            }
        </Card>
    )
}

export default Expenses
