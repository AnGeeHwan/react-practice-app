import React, { useState } from 'react';

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import './App.css'

const Dummy_expenses = [
  { id: 'e1', title: 'Car Insurance1', amount: 221.31, date: new Date(2021, 3, 10) },
  { id: 'e2', title: 'Car Insurance2', amount: 11.31, date: new Date(2021, 3, 15) },
  { id: 'e3', title: 'Car Insurance3', amount: 2231.1, date: new Date(2021, 3, 12) },
  { id: 'e4', title: 'Car Insurance4', amount: 331.33, date: new Date(2021, 3, 25) },
  { id: 'e5', title: 'Car Insurance5', amount: 31.3344, date: new Date(2021, 3, 21) },
];


const App = () => {

  const [expenses, setExpenses] = useState(Dummy_expenses);
  const [txtBtn, setTxtBtn] = useState("add");
  const [addExpense, setAddExpense] = useState(false);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  const exportExpense = () => {
    return addExpense === false ? <></> :
      <NewExpense onAddExpense={addExpenseHandler} />
  }

  const txtChangehandler = () => {
    return txtBtn === "add" ? setTxtBtn("cancle") : setTxtBtn("add");
  }


  return (
    <div className='App'>
      {exportExpense()}
      <Expenses items={expenses} />
      <button className='btnAdd' onClick={() => {
        setAddExpense(!addExpense);
        txtChangehandler();
      }}>{txtBtn}</button>
    </div>
  );
}

export default App;
