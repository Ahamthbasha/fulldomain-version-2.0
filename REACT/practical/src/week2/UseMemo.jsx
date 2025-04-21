import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [text,setText] = useState('')
    const [no,setNo] = useState(1)

    const square=useMemo(()=>{
        return no * no
    },[no])
  return (
    <div>
        <h1>{no} square is :{square}</h1>
        <input type="text" onChange={(e)=>setText(e.target.value)} />
        <button onClick={()=>setNo((no)=>no+1)}>Increment</button>     
    </div>
  )
}

export default UseMemo
