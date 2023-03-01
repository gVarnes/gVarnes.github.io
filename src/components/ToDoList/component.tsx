import React from 'react'
import { ITodosState } from '../../store/slices/todoSlice'
import ListItem from '../ListItem'

const ToDoList: React.FC<ITodosState> = ({todos}) => {
	return (
		<ul>
			<li>
				<div>ID</div>
				<div>TITLE</div>
				<div>DESCRIPTION</div>
				<div>STATUS</div>
			</li>
			{todos?.map(todo => (
				<ListItem key={todo.id} {...todo} />
			))}
		</ul>
  )
}

export default ToDoList