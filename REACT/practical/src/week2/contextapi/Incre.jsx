import React, { useContext } from 'react'
import { CreateContext } from './CreateContext'

const Incre = () => {
    const {increment} = useContext(CreateContext)
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Incre
