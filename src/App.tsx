import React from 'react';
import './App.css';
import Modal from './components/Modal';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import { useAppSelector } from './store/store';
import { useDispatch } from 'react-redux';

import { setIsOpen } from './store/slices/modalSlice';
import ToDoModal from './components/ToDoModal';

function App() {
  const { todos } = useAppSelector((state) => state.todo)
  const { isOpen } = useAppSelector((state) => state.modal)
  const dispatch = useDispatch()

  const closeModal = ()=>{dispatch(setIsOpen(false))}

  return (
    <div className="app">
      <div className='container'>
        <ToDoForm />
        <ToDoList todos={todos} />
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ToDoModal />
      </Modal>
    </div>
  );
}

export default App;
