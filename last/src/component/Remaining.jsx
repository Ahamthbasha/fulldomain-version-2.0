// import React, { useState } from 'react'

// const ChildComponent = ({msg}) => {
//     return(
//         <h1>ChildComponent:{msg}</h1>
//     )
// }

// const Remaining = () => {
//     const [message,setMessage] = useState('')
//   return (
//     <div>
//       <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} />

//       <ChildComponent msg={message}/>
//     </div>
//   )
// }

// export default Remaining

// import React, { useState } from 'react'

// const ChildComponent = ({fn}) => {
//     return(
//         <>
//         <h1>Child</h1>
//         <button onClick={()=>fn("basha bai")}>send Message</button>
//         </>
//     )
// }

// const Remaining = () => {
//     const [message,setMessage] = useState('')

//     const set = (data) =>{
//         setMessage(data)
//     }

//   return (
//     <div>
//     <h1>Parent:{message}</h1>  
//     <ChildComponent fn={set}/>
//     </div>
//   )
// }

// export default Remaining


// import React, { forwardRef, useRef } from 'react'

// const ChildComponent = forwardRef((props,inputRef) => {
//     return(
//         <input type='text' ref={inputRef}/>
//     )
// })


// const Remaining = () => {
//     const inputRef = useRef()
//   return (
//     <div>
//       <ChildComponent ref={inputRef}/>

//       <button onClick={()=>{inputRef.current.focus()}}>focus</button>
//     </div>
//   )
// }

// // export default Remaining

// import React, { useRef, useState } from 'react'

// const Remaining = () => {
//     const [time,setTimer] = useState(0)
//     const current = useRef()

//     const start =() =>{
//         if(current.current){
//             return
//         }
//        current.current = setInterval(()=>{
//             setTimer((time)=>time+1)
//         },1000)
//     }

//     const stop = () =>{
//         clearInterval(current.current)

//         current.current = null
//     }

//     const reset =() =>{
//         setTimer(0)
//     }
//   return (
//     <div>
//       <h1>{time}</h1>

//       <button onClick={start}>start</button>

//       <button onClick={stop}>stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default Remaining


import React from 'react'

import CustomHook from './CustomHook'
const Remaining = () => {

    const {load,error,data} = CustomHook()
    
    if(load){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error.message}</p>
    }
  return (
    <div>
      <h1>user list</h1>
      <ul>
        {
            data.map((user)=>{
               return <li key={user.id}>{user.name}</li>
            })
        }
      </ul>
    </div>
  )
}

export default Remaining

