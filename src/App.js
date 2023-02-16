import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NexExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        date: new Date(2023, 0, 10),
        title: 'New book',
        price: 30.99
    },
    {
        date: new Date(2023, 0, 10),
        title: 'New product',
        price: 99.99
    },
    {
        date: new Date(2023, 0, 10),
        title: 'New thing',
        price: 999.99
    }
]

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const expenseHandler = (expenseData) => {
        console.log('This is happening inside App.js')
        setExpenses((previousExpenses) => {
            return [expenseData, ...previousExpenses]
        })
    }

    console.log('expenses:', expenses)

    return (
        <div className="App">
            <NewExpense onAddExpense={expenseHandler}></NewExpense>
            <Expenses expenseData={DUMMY_EXPENSES}></Expenses>
        </div>
    );
}

export default App;
