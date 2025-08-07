// import React, { useState } from 'react'

// const ChildComponent = ({sendFn})=>{
//     const send = ()=>{
//         sendFn('message from child')
//     }
//     return(
//         <div>
//             <button onClick={send}>Send Message</button>
//         </div>
//     )
// }

// const Basics = () => {
//     const [message,setMessage] = useState('')

//     const receivedMessage = (data)=>{
//         setMessage(data)
//     }
//   return (
//     <div>
//         <h1>ParentComponent:{message}</h1>
//         <ChildComponent sendFn = {receivedMessage}/>
//     </div>
//   )
// }

// export default Basics


// import React, { forwardRef, useRef } from 'react'

// const ChildComponent = forwardRef((props,ref)=>{
//     return(
//         <div>
//             <input type="text" ref={ref}/>
//         </div>
//     )
// })


// const Basics = () => {
//     const inputRef = useRef(null)
//     const focus = ()=>{
//         inputRef.current.focus()
//     }
//   return (
//     <div>
//       <ChildComponent ref={inputRef}/>
//       <button onClick={focus}>Focus</button>
//     </div>
//   )
// }

// export default Basics


// import React, { useState } from 'react'

// const ChildComponent = ({number}) => {
//     const square = number * number
//     return(
//         <div>
//             {square}
//         </div>
//     )
// }

// const Basics = () => {
//     const [no,setNo] = useState(1)
//     const increment = ()=>{
//         setNo((no)=>no+1)
//     }

//     const decrement = ()=>{
//         setNo((no)=>no-1)
//     }

//     return (
//     <div>
//     <h1>{no}</h1>
//     <button onClick={increment}>increment</button>
//     <button onClick={decrement}>decrement</button>  

//     <ChildComponent number={no}/>
//     </div>
//   )
// }

// export default Basics

import React from 'react'

const Basics = () => {
  return (
    <div>
      
    </div>
  )
}

export default Basics
