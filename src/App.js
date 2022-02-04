import React from 'react';

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Car Insurance1', amount: 221.31, date: new Date(2021, 3, 10) },
    { id: 'e2', title: 'Car Insurance2', amount: 11.31, date: new Date(2021, 3, 15) },
    { id: 'e3', title: 'Car Insurance3', amount: 2231.1, date: new Date(2021, 3, 12) },
    { id: 'e4', title: 'Car Insurance4', amount: 331.33, date: new Date(2021, 3, 25) },
    { id: 'e5', title: 'Car Insurance5', amount: 31.3344, date: new Date(2021, 3, 21) },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
