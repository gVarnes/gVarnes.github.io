import React, { InputHTMLAttributes } from 'react'
import styles from './index.module.css'

// interface IInput{
// 	children: string
// }


interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	// Добавляем свои собственные свойства здесь, если они есть
	children: string;
 }
 

const Input: React.FC<IInput> = ({children, ...rest}) => {
  return (
	  <label>
		  { children}
		  <input type="text" {...rest} />
	 </label>
  )
}

export default Input