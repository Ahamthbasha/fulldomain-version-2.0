import React, { useContext } from 'react'
import { toggleContext } from './counter'

const Input = () => {
    const {toggle} = useContext(toggleContext)
  return (
    <div>
      <input type="checkbox" checked={toggle} />
    </div>
  )
}

export default Input
