import React, { useEffect } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import { useAppSelector } from './store/store';

function App() {
  const {todos} = useAppSelector((state)=> state.todo)

  useEffect(() => {
    console.log(todos)
  }, [todos])
  
  return (
    <div className="app">
      <div className='container'>
        <ToDoForm />
        <ToDoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
