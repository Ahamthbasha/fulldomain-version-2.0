import React, { useState } from 'react'

const useCustomHook = () => {
    const [count,setCount] = useState(0)
    const increment = () => {
        setCount((count)=>count+1)
    }

    const decrement = () => {
        setCount((count)=>count-1)
    }

    const reset = () => {
        setCount(0)
    }

  return {count,increment,decrement,reset}
}

export default useCustomHook
