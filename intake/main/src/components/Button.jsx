import React, { useContext } from 'react'
import { toggleContext } from './counter'

const Button = () => {
    const {changeToggle} = useContext(toggleContext)
  return (
    <div>
      <button onClick={changeToggle}>changeToggle</button>
    </div>
  )
}

export default Button
