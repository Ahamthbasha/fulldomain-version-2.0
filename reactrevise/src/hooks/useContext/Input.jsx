import React, { useContext } from 'react'
import { myContext } from './ContextCreation'

const Input = () => {
    const {toggle} = useContext(myContext)
  return (
    <div>
      <input type="checkbox" checked={toggle} />
    </div>
  )
}

export default Input
