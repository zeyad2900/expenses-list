import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
    const ExpenseSaveHandler = (expenseDataSaved) => {
        const expenseData = {
            ...expenseDataSaved,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onExpenseSave={ExpenseSaveHandler}></ExpenseForm>
        </div>
    );
};
export default NewExpense;
