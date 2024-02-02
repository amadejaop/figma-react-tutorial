import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Expenses from './pages/expenses/expenses';


function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Expenses />
      </Router>
    
    </>
  );
}

export default App;
