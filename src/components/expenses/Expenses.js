import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesCart";
const Expenses = (props) => {
    const [select, setSelect] = useState("2021");

    const selectChangeEvent = (selected) => {
        setSelect(selected);
    };
    const filteredExpense = props.item.filter((ele) => {
        return ele.date.getFullYear().toString() === select;
    });
    return (
        <Card className="expenses">
            <ExpenseFilter selected={select} onSelectChange={selectChangeEvent}></ExpenseFilter>
            <ExpensesChart expenses={filteredExpense} />
            <ExpenseList items={filteredExpense}></ExpenseList>
        </Card>
    );
};

export default Expenses;
