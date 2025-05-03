import React, { useCallback, useState } from 'react'

const ChildComponent =React.memo(({Increment})=>{
    console.log("child component render")
return(
    <>
    <button onClick={Increment}>Increment</button>
    </>
)
})

const UseCallback = () => {
    const [input,setInput] = useState('')

    const [value,setValue] = useState(1)

    const Increment =useCallback(()=>{
        setValue((value)=>value+1)
    },[])

  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>

      <p>{value}</p>

      <ChildComponent Increment={Increment}/>
    </div>
  )
}

export default UseCallback
