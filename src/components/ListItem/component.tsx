import React from 'react'
import { changeStatus, ITodo } from '../../store/slices/todoSlice'

import { useDispatch } from 'react-redux'

const ListItem: React.FC<ITodo> = ({ id, title, description, status }) => {
	const dispatch = useDispatch()
	const handleOnChange = () => {
		if (id) {
			dispatch(changeStatus(id))
		}
	}
  return (
	  <li>
		  <div>{id}</div>
		  <div>{title}</div>
		  <div>{description}</div>
		  <input type="checkbox" checked={status} onChange={handleOnChange} />
	  </li>
  )
}

export default ListItem