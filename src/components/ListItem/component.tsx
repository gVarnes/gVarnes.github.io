import React from 'react'
import { ITodo } from '../../store/slices/todoSlice'

const ListItem:React.FC<ITodo> = ({title, description, status}) => {
  return (
	  <div >{ title}</div>
  )
}

export default ListItem