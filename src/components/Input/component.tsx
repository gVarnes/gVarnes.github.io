import React, { InputHTMLAttributes } from 'react'
import styles from './index.module.css'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	children: string;
 }
 

const Input: React.FC<IInput> = ({children, ...rest}) => {
  return (
	  <label className={styles.input}>
		  { children}
		  <input type="text" {...rest} />
	 </label>
  )
}

export default Input