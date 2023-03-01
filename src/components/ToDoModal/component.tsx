// import React from 'react'
// import styles from './index.module.css'
// import Input from '../Input'

// import { useAppSelector } from '../../store/store'
// import { useDispatch } from 'react-redux'
// import { changeStatus } from '../../store/slices/todoSlice'

// const ToDoModal = () => {
// 	const { currentTodo } = useAppSelector(state => state.todo)
// 	const dispatch = useDispatch()

// 	const handleOnChange = () => {
// 		if (currentTodo?.id) {
// 			dispatch(changeStatus(currentTodo.id))
// 		}
// 	}
	
// 	return (
// 	  <div className={styles.modal}>
// 			<div className={styles.title}>
// 				{currentTodo?.title}
// 			</div>
// 			<div className={styles.description}>
// 				<div >Description:</div>
// 				{currentTodo?.description}
// 			</div>
// 			<div className={styles.status}>
// 				<Input type='checkbox' checked={currentTodo?.status} row onChange={handleOnChange}>Status</Input>
// 			</div>
// 		</div>
//   )
// }

// export default ToDoModal

import React from 'react'
import styles from './index.module.css'
import Input from '../Input'

import { useAppSelector } from '../../store/store'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../../store/slices/todoSlice'

const ToDoModal = () => {
	const { currentTodo } = useAppSelector(state => state.todo)
	const dispatch = useDispatch()

	const handleOnChange = () => {
		if (currentTodo?.id) {
			dispatch(changeStatus(currentTodo.id))
		}
	}
	
	return ( 
	  <div className={styles.modal}>
			<div className={styles.title}>
				{currentTodo?.title}
			</div>
			<div className={styles.description}>
				<div >Description:</div>
				{currentTodo?.description}
			</div>
			<div className={styles.status}>
				<Input type='checkbox' checked={currentTodo?.status} row onChange={handleOnChange}>Status</Input>
			</div>
		</div>
  )
}

export default ToDoModal