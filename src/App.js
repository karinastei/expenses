import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NexExpense";

const DummyExpenses = [
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

    const expenseHandler = (expenseData) => {
        console.log('This is happening inside App.js')
        console.log('expenseData:', expenseData)
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={expenseHandler}></NewExpense>
            <Expenses expenseData={DummyExpenses}></Expenses>
        </div>
    );
}

export default App;
