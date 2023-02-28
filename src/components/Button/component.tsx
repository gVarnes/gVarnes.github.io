import React, { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	// Добавляем свои собственные свойства здесь, если они есть
	children: string;
 }

const Button: React.FC<IButton> = ({children, ...rest}) => {
  return (
	  <button {...rest}>{children}</button>
  )
}

export default Button