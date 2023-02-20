import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">no expenses</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((ele) => {
                return <ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date}></ExpenseItem>;
            })}
        </ul>
    );
};

export default ExpenseList;
