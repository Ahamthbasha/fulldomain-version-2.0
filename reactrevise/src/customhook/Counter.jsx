import React from 'react'
import useCustomHook from './useCustomHook'

const Counter = () => {
    const {count,increment,decrement,reset} = useCustomHook()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
