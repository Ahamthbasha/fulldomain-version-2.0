// import React, { useState } from 'react'

// const UseMemo = () => {
//     const [value,setValue] = useState(1)
//     const [input,setInput] = useState('')

//     const square =()=>{
//         console.log('calculated')
//         return value * value
//     }

//   return (
//     <div>
//       <input type="text" placeholder='enter something' value={input} onChange={(e)=>setInput(e.target.value)}/>

//       <button onClick={()=>setValue((value)=>value+1)}>Increment</button>

//       <p>See square of no :{value} is {square()}</p>
//     </div>
//   )
// }

// export default UseMemo


import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [input,setInput] = useState('')
    const [value,setValue] = useState(1)

    const square =useMemo(()=>{
        console.log('calculated')
        return value * value
    },[value])

  return (
    <div>
    <input type="text" placeholder='enter something' value={input} onChange={(e)=>setInput(e.target.value)} />

    <button onClick={()=>setValue((value)=>value+1)}>Increment</button>

    <p>square of {value} is :{square}</p>  
    </div>
  )
}

export default UseMemo
