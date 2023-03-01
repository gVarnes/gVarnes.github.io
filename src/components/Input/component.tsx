import React, { InputHTMLAttributes } from 'react'
import styles from './index.module.css'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	children?: string;
	row?: boolean
	error?: boolean,
	errorMessage?: string

 }
 

const Input: React.FC<IInput> = ({children, row, error, errorMessage , ...rest}) => {
	return (
		<label className={`${styles.input} ${row ? styles.inputRow : '' } ${error ? styles.error : ""}`}>
			{ children}
			<input type="text" {...rest} />
				{error && errorMessage && <span>{errorMessage}</span>}
			</label>
  )
}

export default Input