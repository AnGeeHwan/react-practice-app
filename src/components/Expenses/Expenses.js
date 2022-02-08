import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterExpenses = props.items.filter((it) => it.date.getFullYear().toString() === filteredYear);


  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </>
  )
}
export default Expense;