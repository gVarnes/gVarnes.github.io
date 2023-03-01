import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './index.module.css'
import Input from '../Input'
import Button from '../Button'

import { addToDo } from '../../store/slices/todoSlice'
import { useDispatch } from 'react-redux'

interface IValidationForm {
	title: string,
   description: string,
}

interface IValidationErrors {
	title?: string;
	description?: string;
}
 
const errorMessage = 'This field is empty'

const validateForm = (values:IValidationForm) => {
	let errors: IValidationErrors = {};

	if (!values.title) {
	  errors.title = errorMessage;
	}

	if (!values.description) {
	  errors.description = errorMessage;
	}

	return errors;
 };

const ToDoForm = () => {
	const [todo, setTodo] = useState({
		title: '',
		description: '',
		status: false
	})
	const [errors, setErrors] = useState<IValidationErrors>({});
	const dispatch = useDispatch()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTodo(prev=>({...prev, [e.target.name] : e.target.value}))
	}
	
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formErrors = validateForm(todo);
    	setErrors(formErrors);

		 if (Object.keys(formErrors).length === 0) {
			 dispatch(addToDo(todo))
			 setErrors({})
		 }
	}

	return (
		<form noValidate className={styles.form} onSubmit={onSubmit}>
			<div className={styles.inputWrapper}>
				<Input
					error={!!errors.title}
					name='title'
					onChange={handleChange}
					placeholder="Enter title"
					errorMessage={errors.title}
				>
					Title:
				</Input>
			</div>
			<div className={styles.inputWrapper}>
				<Input 
				error={!!errors.description}
				name='description' 
				onChange={handleChange} 
				placeholder="Enter description"
				errorMessage={errors.title}
				>
					Description:
				</Input>
			</div>
			<div className={styles.button}>
				<Button type='submit'>Create</Button>
			</div>
		</form>
  )
}

export default ToDoForm