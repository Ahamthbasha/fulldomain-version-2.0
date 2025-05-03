import React, { useContext } from 'react'
import { context } from './CreateContext'

const Checkbox = () => {
    const {toggle} = useContext(context)
  return (
    <div>
      <input type="checkbox" checked={toggle} />
    </div>
  )
}

export default Checkbox
