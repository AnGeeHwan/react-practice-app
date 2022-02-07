import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filetrExpenses = props.items.filter((it) => it.date.getFullYear() === parseInt(filteredYear));

  const ExpenseList = filetrExpenses.map((it) => (
    <ExpenseItem
      key={it.id}
      title={it.title}
      amount={it.amount}
      date={it.date} />
  ));

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }


  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {ExpenseList}
      </Card>
    </>
  )
}

export default Expense;