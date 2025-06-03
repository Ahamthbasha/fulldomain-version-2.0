import React, { useContext } from 'react'
import { myContext } from './ContextCreation'

const Button = () => {
    const {changeToggle} = useContext(myContext)
  return (
    <div>
      <button onClick={changeToggle}>Change</button>
    </div>
  )
}

export default Button
