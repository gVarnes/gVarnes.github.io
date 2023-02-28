import React, { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string;
 }

const Button: React.FC<IButton> = ({children, ...rest}) => {
  return (
	  <button {...rest}>{children}</button>
  )
}

export default Button