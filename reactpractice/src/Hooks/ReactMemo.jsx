// import React, { useState } from 'react'

// const ChildComponent =({title}) =>{
//   console.log('child component rendered')

//   return(
//     <div>
//       <p>{title}</p>
//     </div>
//   )
// }

// const ReactMemo = () => {
//     const [input,setInput] = useState('')

//   return (
//     <div>
//     <input type="text" placeholder='enter something' value={input} onChange={(e)=>setInput(e.target.value)} />
//     <ChildComponent title="i am the best"/>
//     </div>
//   )
// }

// export default ReactMemo


import React, { useState } from 'react'

const ChildComponent =React.memo(({value})=>{
  console.log("child component rendered")

  return(
    <h1>{value}</h1>
  )
})

const ReactMemo = () => {
  const [input,setInput] = useState('')
  const [value,setValue] = useState(1)
  return (
    <div>
      <input type="text" placeholder='enter something' value={input} onChange={(e)=>setInput(e.target.value)} />

      <button onClick={()=>setValue((value)=>value+1)}>Increment</button>

      <ChildComponent value={value}/>
    </div>
  )
}

export default ReactMemo
