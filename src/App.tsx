import React, { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import { useAppSelector } from './store/store';

function App() {
  const { todos } = useAppSelector((state) => state.todo)
  const [isOpen,setIsOpen] = useState(true)

  useEffect(() => {
    console.log(todos)
  }, [todos])
  
  return (
    <div className="app">
      <div className='container'>
        <ToDoForm />
        <ToDoList todos={todos} />
      </div>
      <Modal isOpen={isOpen} onClose={()=>{setIsOpen(false)}}>
        <>
          Lorem ipsum dolor sit amet.
          </>
      </Modal>
    </div>
  );
}

export default App;
