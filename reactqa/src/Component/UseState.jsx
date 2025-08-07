// import React, { useState } from 'react'

// const UseState = () => {
//     const [count,setCount] = useState(0)

//     const increment = ()=>{
//         setCount((count)=>count+1)
//     }

//     const decrement= ()=>{
//         setCount((count)=>count-1)
//     }

//     const reset = ()=>{
//         setCount(0)
//     }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default UseState


import React, { useEffect, useState } from 'react'

const UseState = () => {
    const [width,setWidth] = useState(window.innerWidth)

    useEffect(()=>{

        const handleResize = () =>{
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize',handleResize)
        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])
  return (
    <div>
      <h1>{width}</h1>
    </div>
  )
}

export default UseState
