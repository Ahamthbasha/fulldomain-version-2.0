// Practical Example 1: Focusing an Input

// import React, { useRef } from 'react'

// const UseRef = () => {
//     const myRef = useRef(null)
//     const handleClick = () => {
//         myRef.current.focus()
//     }
//   return (
//     <div>
//       <input type="text"  ref={myRef}/>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default UseRef

// 2. Stopwatch Timer

// import React, { useEffect, useRef, useState } from 'react'

// const UseRef = () => {
//     const timeRef = useRef(null)
//     const [time,setTime] = useState(0)


//     const start = () => {
//         if(!timeRef.current){
//             timeRef.current = setInterval(()=>{
//              setTime((time)=>time+1)
//              },1000)
//         }
//     }

//     const stop = () => {
//         clearInterval(timeRef.current)
//         timeRef.current = null
//     }

//     useEffect(()=>{
//         return ()=>{
//             clearInterval(timeRef.current)
//         }
//     },[])
//   return (
//     <div>
//       <h1>{time}</h1>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//     </div>
//   )
// }

// export default UseRef

// 3. Track Previous Value

// import React, { useEffect, useRef, useState } from 'react'

// const UseRef = () => {
//     const [text,setText] = useState('')
//     const textRef = useRef()

//     useEffect(()=>{
//         textRef.current = text
//     },[text])
//   return (
//     <div>
//         <input type="text" ref ={textRef} value={text} onChange={(e)=>{setText(e.target.value)}} />
//       <h1>current text :{text}</h1>
//       <h2>previous text: {textRef.current}</h2>
//     </div>
//   )
// }

// export default UseRef

// .4 Store Mutable State
// Use useRef to store a counter that updates without re-rendering the component.

// Add a button that updates the count and logs it.

import React, { useRef } from 'react'

const UseRef = () => {
    const counterRef = useRef(0)

    const increment = ()=>{
        counterRef.current  += 1
        console.log(`${counterRef.current}`)
    }
  return (
    <div>
    <button onClick={increment}>increment</button>  
    </div>
  )
}

export default UseRef
