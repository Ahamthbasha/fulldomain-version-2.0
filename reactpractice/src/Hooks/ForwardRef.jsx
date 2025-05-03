import React, { forwardRef, useRef } from 'react'

const ChildComponent = forwardRef((props,inputRef) => {
    return(
        <input type="text" ref={inputRef} />
    )
})

const ForwardRef = () => {
    const inputRef = useRef()

    const Focus= () => {
        inputRef.current.focus()
    }

  return (
    <div>
        <ChildComponent ref={inputRef}/>
        <button onClick={Focus}>click to focus</button>  
    </div>
  )
}

export default ForwardRef
