import React from 'react'
import { useDispatch } from 'react-redux'

import { changeStatus, ITodo } from '../../store/slices/todoSlice'
import { setIsOpen } from '../../store/slices/modalSlice'

const ListItem: React.FC<ITodo> = ({ id, title, description, status }) => {
	const dispatch = useDispatch()

	const handleOnChange = () => {
		if (id) {
			dispatch(changeStatus(id))
		}
	}

  return	 (
	  <li>
		  <div>{id}</div>
		  <div onClick={()=>{dispatch(setIsOpen(true))}}>{title}</div>
		  <div>{description}</div>
		  <input type="checkbox" checked={status} onChange={handleOnChange} />
	  </li>
  )
}

export default ListItem