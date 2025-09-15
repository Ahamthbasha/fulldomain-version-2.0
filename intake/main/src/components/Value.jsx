import React, { useContext } from 'react'
import { createCounterContext } from './counter'

const Value = () => {
    const {count} = useContext(createCounterContext)
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Value
