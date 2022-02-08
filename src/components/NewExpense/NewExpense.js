import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData);
  };

  const editingChangeHandler = () => {
    setIsEditing(!isEditing);
  }

  return (
    <div className='new-expense'>
      {isEditing === false ?
        (<button onClick={editingChangeHandler}>Add New Expense</button>) :
        (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setIsEditing={editingChangeHandler} />)}
    </div>
  );
}

export default NewExpense;