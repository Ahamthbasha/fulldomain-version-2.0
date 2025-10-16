// import React, { useState } from 'react'

// const Hooks = () => {
//     const [count,setCount] = useState(0)

//     const increment = ()=>{
//         setCount((count)=>count+1)
//     }

//     const decrement = () => {
//         setCount((count)=>count-1)
//     }

//     const reset = () => {
//         setCount(0)
//     }

//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={increment}>increment</button>
//         <button onClick={decrement}>Decrement</button>
//         <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default Hooks



// import React, { useState,useEffect } from 'react'

// const Hooks = () => {
//     const [width,setWidth] = useState(window.innerWidth)

//     useEffect(()=>{

//         let resizeFn = ()=>{
//             setWidth(()=>{
//                 return window.innerWidth
//             })
//         }

//         window.addEventListener('resize',resizeFn)


//         return () => {
//             window.removeEventListener('resize',resizeFn)
//         }
//     },[])
  
  
//     return (
//     <div>
//       <h1>{width}</h1>
//     </div>
//   )
// }

// export default Hooks



// import React, { useRef } from 'react'

// const Hooks = () => {

//     const inputRef = useRef()

//     const focus = ()=>{
//         inputRef.current.focus()
//     }
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={focus}>Click To Focus</button>
//     </div>
//   )
// }

// export default Hooks


// child to parent

import React, { useState } from 'react'

const ChildComponent = ({fn}) => {
    const send = ()=>{
        fn('hello parent')
    }
    return(
        <>
        <button onClick={send}>Click to send</button>
        </>
    )
}

const Hooks = () => {
    const [data,setData] = useState('')

    const settingData = (msg)=>{
        setData(msg)
    }
  return (
    <div>
        <h1>{data}</h1>
      <ChildComponent fn={settingData}/>
    </div>
  )
}

export default Hooks
