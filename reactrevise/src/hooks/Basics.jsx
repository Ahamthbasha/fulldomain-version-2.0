 ///// parent to child communication. one way communication from parent to child////////////////////////

// import React, { useState } from 'react'

// const ChildComponent = ({message})=>{
//     return (
//         <div>
//             <h1>{message}</h1>
//         </div>
//     )
// }


// const Basics = () => {
//     const [message,setMessage] = useState()

//   return (
//     <div>
//       <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} />
//       <ChildComponent message={message}/>
//     </div>
//   )
// }

// export default Basics


////////////////child to parent//////////////////////////


// import React, { useState } from 'react'

// const ChildComponent = ({handle}) => {

//     const click = ()=>{
//         handle('hi parent this is child message')
//     }

//     return (
//         <div>
//             <h1>child component</h1>
//             <button onClick={click}>click to send data to the parent component</button>
//         </div>
//     )
// }

// const Basics = () => {
//     const [message,setMessage] = useState('')

//     const handleMessage = (message) => {
//         setMessage(message)
//     }

//   return (
//     <div>
//     <h1>parentComponent:{message}</h1>
//     <ChildComponent handle={handleMessage}/>  
//     </div>
//   )
// }

// export default Basics

/////////////////////forward ref///////////////////////////

// a parent component to control a child component’s DOM node.

// Use case of forwardRef: It allows a parent component to access or control a DOM node inside a child functional component.

// Why needed: Normally, refs cannot be attached directly to function components — React ignores or warns about that.

// forwardRef solves this by forwarding the ref from the parent through the child component to a DOM node (or another ref), enabling imperative control.

// forwardRef bridges the gap so parents can access DOM elements inside child function components.

import React, { forwardRef, useRef } from 'react'

const ChildComponent = forwardRef((props,ref)=>{
    return(
        <>
        <input type="text" ref={ref} />
        </>
    )
})

const Basics = () => {
    const inputRef = useRef()

    const handleFocus = ()=>{
        inputRef.current.focus()
    }
  return (
    <div>
      <ChildComponent ref={inputRef}/>
      <button onClick={handleFocus}>Click To Focus</button>
    </div>
  )
}

export default Basics
