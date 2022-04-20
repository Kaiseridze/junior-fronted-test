import React, { FC } from 'react'
import './Button.scss'

interface Ibutton {
   children: React.ReactChild | React.ReactNode,
   onClick: () => void
}

const Button: FC<Ibutton> = ({onClick, children}) => {
   return <button onClick={onClick} className='btn'>{children}</button>
}

export default Button
