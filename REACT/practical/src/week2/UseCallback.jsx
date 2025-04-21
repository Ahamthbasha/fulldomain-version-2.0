import React, { useCallback,useState } from 'react'

const ChildComponet=({incrementFn})=>{
    console.log("child rendered")
    return(
        <div>
            <button onClick={incrementFn}>Increment</button>
        </div>
    )
}


const UseCallback = () => {

    const [no,setCount] = useState(1)
    const [text,setText] = useState('')

    const increment=useCallback(()=>{
       setCount((count)=>count+1) 
    },[])

  return (
    <div>
    <input type="text" onChange={(e)=>setText(e.target.value)} /> 
    <h1>{no}</h1>
    <ChildComponet incrementFn={increment}/> 
    </div>
  )
}

export default UseCallback
