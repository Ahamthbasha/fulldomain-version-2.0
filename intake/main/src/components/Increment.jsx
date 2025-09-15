import React, { useContext } from 'react'
import { createCounterContext } from './counter'

const Increment = () => {
    const {increment} = useContext(createCounterContext)
  return (
    <div>
        <button onClick={increment}>Increment</button>      
    </div>
  )
}

export default Increment
