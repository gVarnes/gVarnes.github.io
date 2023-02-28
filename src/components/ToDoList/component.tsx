import React from 'react'
import { ITodosState } from '../../store/slices/todoSlice'
import ListItem from '../ListItem'

const ToDoList: React.FC<ITodosState> = ({todos}) => {
  return (
	  <ul>
		  {todos?.map(todo => (
		  		<ListItem key={todo.id} {...todo} />
	  	))}
	  </ul>
  )
}

export default ToDoList