import React, { useState } from 'react';
import './App.css';

import Header from './header';
import ExpenseForm from './expenseForm';
import Transactions from './transactions';

function App() {

  const [transactions, setTransactions] = useState([])

  return (
    <div className="App">
      
      <Header title= "Expense Tracker - Basic" />

      <ExpenseForm  setTransactions = {setTransactions} />

      <Transactions transactions = {transactions} />

    </div>
  );
}

export default App;
