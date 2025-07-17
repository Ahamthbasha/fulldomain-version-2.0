//Use Memo Memoize the return value of a function until its dependency is changing.If dependency change it will recalculate

import React, { useMemo, useState } from 'react'

const ChildComponent = ({number})=>{
    let result = 1
    const square = useMemo(()=>{
        for(let i=1;i<=1000;i++){
            result = number * number
        }
        return result
    },[number])
    return(
        <div>
            <h1>{square}</h1>
        </div>
    )
}

const UseMemo = () => {
    const [text,setText] = useState('')
    const [number,setNumber] = useState('')
  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />

      <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} />

      <ChildComponent number = {number}/>
    </div>
  )
}

export default UseMemo


