import React from 'react'
import styles from './index.module.css'

interface IInput{
	children: string
}

const Input: React.FC<IInput> = ({children}) => {
  return (
	  <label>
		  { children}
		  <input type="text" />
	 </label>
  )
}

export default Input