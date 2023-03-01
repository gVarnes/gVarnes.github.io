import React, { InputHTMLAttributes } from 'react'
import styles from './index.module.css'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	children?: string;
	row?: boolean
 }
 

const Input: React.FC<IInput> = ({children, row, ...rest}) => {
  return (
	  <label className={`${styles.input} ${row && styles.inputRow }`}>
		  { children}
		  <input type="text" {...rest} />
	 </label>
  )
}

export default Input