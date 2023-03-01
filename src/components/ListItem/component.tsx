import React from 'react'
import styles from './index.module.css'
import { useDispatch } from 'react-redux'

import { changeStatus, ITodo, setCurrentTodo } from '../../store/slices/todoSlice'
import { setIsOpen } from '../../store/slices/modalSlice'
import Input from '../Input'

const ListItem: React.FC<ITodo> = ({ id, title, description, status }) => {
	const dispatch = useDispatch()

	const handleOnChange = () => {
		if (id) {
			dispatch(changeStatus(id))
		}
	}

	const openModal = () => {
		dispatch(setCurrentTodo({id, title, description, status}))
		dispatch(setIsOpen(true))
	}

  return	 (
	  <li>
		  <div>{id}</div>
		  <div className={styles.title} onClick={openModal}>{title}</div>
		  <div>{description}</div>
		  <Input type="checkbox" checked={status} onChange={handleOnChange} />
	  </li>
  )
}

export default ListItem