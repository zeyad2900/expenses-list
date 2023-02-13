import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const newTitleHandler = (e) => {
        setEnteredTitle(e.target.value);
    };
    const newAmountHandler = (e) => {
        setEnteredAmount(e.target.value);
    };
    const newDateHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onExpenseSave(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={newTitleHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={newAmountHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-30" value={enteredDate} onChange={newDateHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">New Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;
