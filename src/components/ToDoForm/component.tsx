import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './index.module.css'
import Input from '../Input'
import Button from '../Button'

import { addToDo } from '../../store/slices/todoSlice'
import { useDispatch } from 'react-redux'

const ToDoForm = () => {
	const [todo, setTodo] = useState({
		title: '',
		description: '',
		status: false
	})
	const dispatch = useDispatch()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTodo(prev=>({...prev, [e.target.name] : e.target.value}))
	}
	
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(addToDo(todo))
	}

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<Input name='title' onChange={handleChange}>Title:</Input>
			<Input name='description' onChange={handleChange}>Description:</Input>
			<Button type='submit'>Create</Button>
		</form>
  )
}

export default ToDoForm