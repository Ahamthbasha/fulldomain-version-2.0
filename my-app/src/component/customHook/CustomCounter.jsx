import React from 'react'
import { useState } from 'react'

const useFetchCounter = () => {
    const [count,setCount] = useState(0)

    const increment = ()=>{
        setCount((count)=>count+1)
    }

    const decrement = () => {
        setCount((count)=>count-1)
    }

    const reset = () =>{
        setCount(0)
    }

  return {count,increment,decrement,reset}
}

export default useFetchCounter
