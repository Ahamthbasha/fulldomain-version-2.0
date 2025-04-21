// import React, { useRef, useState } from 'react'

// const UseRef = () => {
//     const [name,setName] = useState('')
//     const inputRef=useRef(null)
    
//     const focus=()=>{
//         inputRef.current.focus()
//     }

//   return (
//     <div>
//     <input type="text" ref={inputRef} onChange={(e)=>setName(e.target.value)}/> 
//     <h1>{name}</h1>
//     <button onClick={focus}>Click To Focus</button> 
//     </div>
//   )
// }

// export default UseRef


// import React, { useRef, useState } from 'react'

// const UseRef = () => {
//     const value=useRef(null)
//     const [text,setText] = useState('')

//     const handleClick=()=>{
//         setText(value.current.value)
//     }
//   return (
//     <div>
//     <input type="text" ref={value} />
//     <button onClick={handleClick}>show</button>
//     <h1>{text}</h1>
//     </div>
//   )
// }

// export default UseRef


// import React,{useState} from 'react'

// const UseRef = () => {
//     const [text,setText] = useState('')
//   return (
//     <div>
//       <input type="text" onChange={(e)=>setText(e.target.value)} />
//       <h1>{text}</h1>
//     </div>
//   )
// }

// export default UseRef

//forward ref

// import React, { forwardRef, useRef } from 'react'

// const ChildComponent=forwardRef((props,ref)=>{
//     return(
//         <input type="text" ref={ref} />
//     )
// })

// const UseRef = () => {
//     const value=useRef(null)

//     const handleFocus=()=>{
//         value.current.focus()
//     }

//   return (
//     <div>
//       <ChildComponent ref={value}/>
//       <button onClick={handleFocus}>Focus</button>
//     </div>
//   )
// }

// export default UseRef

//parent to child

// import React from 'react'

// const ChildComponent=(props)=>{
//     const {name} = props

//     return(
//         <h1>Hi {name}</h1>
//     )
// }

// const UseRef = () => {
//   return (
//     <div>
//       <ChildComponent name={"ahamathbasha"}/>
//     </div>
//   )
// }

// export default UseRef


//child to parent

// import React, { useState } from 'react'

// const ChildComponent=({onSend})=>{
//     const [value,setValue] = useState('')

//     const handleValue=()=>{
//         onSend(value)
//     }
//     return(
//         <div>

//             <input type="text" onChange={(e)=>setValue(e.target.value)} />
//             <button onClick={handleValue}>Click</button>
//         </div>
//     )
// }


// const UseRef = () => {
//     const [childValue,setChildValue] = useState('')

//     const handleData=(data)=>{
//         setChildValue(data)
//     }

//   return (
//     <div>
//       <h1>Data from child:{childValue}</h1>
//       <ChildComponent onSend={handleData}/>
//     </div>
//   )
// }

// export default UseRef

//input type should display in h1

// import React, { useState } from 'react'

// const UseRef = () => {
//     const [value,setValue] = useState('')

//   return (
//     <div>
//     <h1>{value}</h1>
//     <input type="text" onChange={(e)=>setValue(e.target.value)} />  
//     </div>
//   )
// }

// export default UseRef

// import React, { useRef, useState } from 'react'

// const UseRef = () => {
//     const [show,setShow] = useState(false)
    
//     const value=useRef(null)

//     const toggle=()=>{
//         setShow((show)=> !show)
//     }

//   return (
//     <div>
//       <input type="text" ref={value} />
//       {show && <h1>{value.current.value}</h1>}
//       <button onClick={toggle}>hanldeClick</button>
//     </div>
//   )
// }

// export default UseRef



import React from 'react'

const UseRef = () => {
  return (
    <div>
      
    </div>
  )
}

export default UseRef
