import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
    const [select, setSelect] = useState("2023");

    const selectChangeEvent = (selected) => {
        setSelect(selected);
    };

    return (
        <Card className="expenses">
            <ExpenseFilter selected={select} onSelectChange={selectChangeEvent}></ExpenseFilter>
            <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}></ExpenseItem>
            <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}></ExpenseItem>
            <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}></ExpenseItem>
            <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date}></ExpenseItem>
        </Card>
    );
};
export default Expenses;
