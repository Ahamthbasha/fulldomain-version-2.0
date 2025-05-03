import React, { createContext, useContext } from 'react'
import { context } from './CreateContext'

const Button = () => {
    const {toggleFn} = useContext(context)
  return (
    <div>
      <button onClick={toggleFn}>toggle</button>
    </div>
  )
}

export default Button
