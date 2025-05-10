import React, { useContext } from 'react'
import { contextCreation } from './Creation'

const Input = () => {
    const {toggle} = useContext(contextCreation)
  return (
    <div>
      <input type="checkbox" checked={toggle} />
    </div>
  )
}

export default Input
