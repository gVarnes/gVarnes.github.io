import React from 'react'
import styles from './index.module.css'
import Input from '../Input'
import Button from '../Button'

const ToDoForm = () => {
	return (
		<form className={styles.form}>
			<Input>Title:</Input>
			<Input>Description:</Input>
			<Button type='submit'>Create</Button>
		</form>
  )
}

export default ToDoForm