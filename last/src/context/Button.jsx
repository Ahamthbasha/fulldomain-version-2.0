import React, { useContext } from 'react'
import { contextCreation } from './Creation'

const Button = () => {
    const {changeToggle} = useContext(contextCreation)

  return (
    <div>
    <button onClick={changeToggle}>changeToggle</button>  
    </div>
  )
}

export default Button
