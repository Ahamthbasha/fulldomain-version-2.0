// import React, { useRef, useState } from 'react'

// const UseRef = () => {
//     const [time,setTime] = useState(0)
//     const timeRef = useRef(null)

//     const start = ()=>{
//         if(!timeRef.current){
//             timeRef.current=setInterval(()=>{
//                 setTime((time)=>time+1)
//             },1000)
//         }
//     }

//     const stop = ()=>{
//         clearInterval(timeRef.current)
//         timeRef.current = null
//     }

//     const reset = ()=>{
//         stop()
//         setTime(0)
//     }
//   return (
//     <div>
//       <h1>{time}</h1>
//       <button onClick={start}>start</button>
//       <button onClick={stop}>stop</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default UseRef


import React, { useRef } from 'react'

const UseRef = () => {
    const focusRef = useRef(null)

    const focus = ()=>{
        focusRef.current.focus()
    } 
  return (
    <div>
    <input type="text" ref={focusRef} />
    <button onClick={focus}>Focus</button>  
    </div>
  )
}

export default UseRef
