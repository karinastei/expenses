import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NexExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        date: new Date(2023, 1, 1),
        title: 'Old book',
        price: 30.99
    },
    {
        id: 'e2',
        date: new Date(2024, 2, 2),
        title: 'Old book',
        price: 35.99
    },
    {
        id: 'e3',
        date: new Date(2023, 3, 3),
        title: 'Old jeans',
        price: 51.99
    },
    {
        id: 'e4',
        date: new Date(2024, 4, 4),
        title: 'New jeans',
        price: 68.86
    },
    {
        id: 'e5',
        date: new Date(2023, 5, 5),
        title: 'Playstation 5',
        price: 599.99
    }
]

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = (expenseData) => {
        console.log('In App.js')
        setExpenses((previousExpenses) => {
            return [expenseData, ...previousExpenses]
        })
    }

    console.log(expenses)

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenseData={expenses}></Expenses>
        </div>
    );
}

export default App;

