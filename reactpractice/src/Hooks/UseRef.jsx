import React, { useRef, useState } from 'react'

const UseRef = () => {
    
    const [toggle,setToggle] = useState(false)
    const inputRef = useRef()

    const toggleFn=()=>{
        setToggle((toggle)=>!toggle)
    }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={toggleFn}>show</button>
      {toggle && <p>{inputRef.current.value}</p>}
    </div>
  )
}

export default UseRef
