// import React, { useState } from 'react'

// const ChildComponent = ({message})=>{
//     return(
//         <div>
//             <h1>Message From parent:{message}</h1>
//         </div>
//     )
// }


// const Basics = () => {
//     const [message,setMessage] = useState('')
//   return (
//     <div>
//       <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} />

//       <ChildComponent message={message}/>
//     </div>
//   )
// }

// export default Basics

// import React, { useState } from 'react'

// const ChildComponent = ({send}) => {

//     const sendMsg = ()=>{
//         send("hello parent")
//     }
//     return(
//         <div>
//             <button onClick={sendMsg}>Send message To parent</button>
//         </div>
//     )
// }

// const Basics = () => {
//     const [message,setMessage] = useState('')

//     const setMessageToParent = (msg)=>{
//         setMessage(msg)
//     }

//   return (
//     <div>
//     <h1>Parent Component:{message}</h1>
//     <ChildComponent send={setMessageToParent}/>  
//     </div>
//   )
// }

// export default Basics

//forward Ref

import React, { forwardRef, useRef } from 'react'

const ChildComponent = forwardRef((props,ref) => {
    return(
        <>
        <input type="text" ref={ref}/>    
        </>
    )
})

const Basics = () => {
    const inputRef = useRef()
    const focus = ()=>{
        inputRef.current.focus()
    }
  return (
    <div>
      <ChildComponent ref={inputRef}/>
      <button onClick={focus}>Cick To Focus</button>
    </div>
  )
}

export default Basics
