import React, { useState } from 'react'

const ChildComponent =({value,setValue}) => {
    const Increment =()=>{
        setValue((value)=>value+1)
    }
    return(
    <>
    <h1>{value}</h1>
    <button onClick={Increment}>Increment</button>
    </>
    )
}

const ParentToChild = () => {
    const [value,setValue] = useState(0)
  return (
    <div>
      <ChildComponent value={value} setValue={setValue}/>
    </div>
  )
}

export default ParentToChild
