import { ReactElement } from 'react'

export interface IButtonProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  fullWidth?: boolean
  disabled?: boolean
  children?: ReactElement | string
  classes?: string
}

const variantColor = {
  contained: {
    primary: 'text-white bg-blue-600 hover:bg-blue-700',
    secondary: 'text-white bg-purple-600 hover:bg-purple-700',
    success: 'text-white bg-green-600 hover:bg-green-700',
    warning: 'text-white bg-yellow-600 hover:bg-yellow-700',
    error: 'text-white bg-red-600 hover:bg-red-700',
  },

  outlined: {
    primary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-100',
    secondary: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-100',
    success: 'border-2 border-green-600 text-green-600 hover:bg-green-100',
    warning: 'border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-100',
    error: 'border-2 border-red-600 text-red-600 hover:bg-red-100',
  },
  text: {
    primary: 'text-blue-600 hover:bg-blue-100',
    secondary: 'text-purple-600 hover:bg-purple-100',
    success: 'text-green-600 hover:bg-green-100',
    warning: 'text-yellow-600 hover:bg-yellow-100',
    error: 'text-red-600 hover:bg-red-100',
  },
}

const Button = ({
  size = 'md',
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  children = 'button',
  classes = '',
}: IButtonProps) => {
  const sizeCls =
    size === 'sm' ? 'px-2 py-1' : size === 'md' ? 'px-3 py-1.5' : 'px-5 py-3'
  const variantCls = variantColor[variant][color]

  const fwCls = fullWidth && 'w-full'
  const disCls = disabled && 'opacity-50 cursor-auto'

  return (
    <button
      disabled={disabled}
      className={`uppercase text-xs rounded-sm ${sizeCls} ${fwCls} ${variantCls} ${disCls} ${classes} `}
    >
      {children}
    </button>
  )
}

export default Button
