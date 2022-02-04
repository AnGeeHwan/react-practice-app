import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

const Expense = (props) => {
  const ExpenseList = props.items.map((it) => (
    <ExpenseItem key={it.id} title={it.title} amount={it.amount} date={it.date} />
  ));

  return (
    <Card className="expenses">
      {ExpenseList}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date} />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date} />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date} />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date} /> */}
    </Card>
  )
}

export default Expense;