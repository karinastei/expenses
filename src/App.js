import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NexExpense";

const App = () => {
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title: 'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 5),
            title: 'New product',
            price: 99.99
        }
    ]

    const expenseHandler = (expense) => {
        console.log('This is happening inside App.js')
        console.log('expense:', expense)
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={expenseHandler}></NewExpense>
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;
