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

// import React, { useState } from 'react'

// const ChildComponent = ({fn}) => {
//     const send = ()=>{
//         fn('hello parent')
//     }
//     return(
//         <>
//         <button onClick={send}>Click to send</button>
//         </>
//     )
// }

// const Hooks = () => {
//     const [data,setData] = useState('')

//     const settingData = (msg)=>{
//         setData(msg)
//     }
//   return (
//     <div>
//         <h1>{data}</h1>
//       <ChildComponent fn={settingData}/>
//     </div>
//   )
// }

// export default Hooks


// import React, { useEffect, useState } from 'react'

// const Hooks = () => {
//   const [user,setUser] = useState([])
//   const [load,setLoad] = useState(false)
//   const [error,setError] = useState('')

//   async function fetchUser(url){
//     try {
//       setLoad(true)
//       const response = await fetch(url)
//       const result = await response.json()
//       setUser(result)
//     } catch (error) {
//       setError(error.message)
//     }
//     finally{
//       setLoad(false)
//     }
//   }

//   useEffect(()=>{
//     fetchUser('https://jsonplaceholder.typicode.com/users')
//   },[])

//   if(load){
//     return <p>Loading...</p>
//   }

//   if(error){
//     return <p>{error}</p>
//   }
//   return (
//     <div>
//       <ul>
//         {
//           user.map((use)=>{
//           return  <li key={use.id}>{use.username}</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }

// export default Hooks

//useRef


// import React, { useRef, useState } from 'react'

// const Hooks = () => {
//   const [toggle,setToggle] = useState(false)
//   const inputRef = useRef()

//   const togglefn = (()=>{
//     setToggle((toggle)=>!toggle)
//   })

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={togglefn}>click To display</button>
//       {toggle && inputRef.current.value}
//     </div>
//   )
// }

// export default Hooks


//forward ref


// import React, { forwardRef, useRef } from 'react'

// const ChildComponent = forwardRef((props,ref) => {
//   return(
//     <>
//     <input type="text" ref={ref} />
//     </>
//   )
// })


// const Hooks = () => {
//   const inputRef = useRef()

//   const focus = ()=>{
//     inputRef.current.focus()
//   }

//   return (
//     <div>
//       <ChildComponent ref={inputRef}/>
//       <button onClick={focus}>Focus</button>
//     </div>
//   )
// }

// export default Hooks


//use Memo

// import React, { useMemo, useState } from 'react'

// const Hooks = () => {
//   const [input,setInput] = useState('')
//   const [count,setCount] = useState(0)

//   const square = useMemo(()=>{
//     console.log('recalculate')
//     return count * count
//   },[count])
  
//   const increment = ()=>{
//     setCount((count)=>count+1)
//   }

//   return (
//     <div>
//       <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
//       <button onClick={increment}>increment</button>
//       <h1>{count} square is: {square}</h1>
//     </div>
//   )
// }

// export default Hooks


//useCallback

// import React, { useCallback, useState } from 'react'

// const ChildComponent = React.memo(({increase})=>{
//   console.log('render')
//   return(
//     <>
//     <button onClick={increase}>increment</button>
//     </>
//   )
// })

// const Hooks = () => {
//   const [input,setInput] = useState('')
//   const [count,setCount] = useState(0)

//   const increment = useCallback(()=>{
//     setCount((count)=>count+1)
//   },[])

//   return (
//     <div>
//       <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
//       <h1>{count}</h1>
//       <ChildComponent increase ={increment}/>
//     </div>
//   )
// }

// export default Hooks


//react memo

// import React, { useState } from 'react'

// const ChildComponent = React.memo(({value}) => {
//   console.log('child')
//   return(
//     <div>
//       <h1>{value}</h1>
//     </div>
//   )
// })


// const Hooks = () => {
//   const [input,setInput] = useState('')
//   const [count,setCount] = useState(0)

//   const increment = () => {
//     setCount((count)=>count+1)
//   }

//   return (
//     <div>
//       <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>

//       <button onClick={increment}>Increment</button>

//       <ChildComponent value={count}/>
//     </div>
//   )
// }

// export default Hooks


// import React from 'react'
// import { useReducer } from 'react'

// const Hooks = () => {
//   const initialState = {count:0}
//   const reducerFn = (state,action)=>{
//     switch(action.type){
//       case 'INCREMENT':
//         return {...state,count:state.count+1}
//       case 'DECREMENT':
//         return {...state,count:state.count-1}
//       case "RESET":
//         return {...state,count:0}
//       default:
//         return state
//     }
//   }
//   const [state,dispatch] = useReducer(reducerFn,initialState)

//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
//       <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
//       <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
//     </div>
//   )
// }

// export default Hooks


// import React from 'react'

// const Hooks = () => {
//   return (
//     <div>
//       hi i am lazy component
//     </div>
//   )
// }

// export default Hooks


// import React from 'react'
// import CreateContext from './context/CreateContext'
// import Show from './context/Show'
// import Button from './context/Button'

// const Hooks = () => {
//   return (
//     <div>
//       <CreateContext>
//         <Show/>
//         <Button/>
//       </CreateContext>
//     </div>
//   )
// }

// export default Hooks



// import React from 'react'
// import CreateContext from './context/CreateContext'
// import Show from './context/Show'
// import Button from './context/Button'

// const Hooks = () => {
//   return (
//     <div>
//       <CreateContext>
//         <Show/>
//         <Button/>
//       </CreateContext>
//     </div>
//   )
// }

// export default Hooks

//higher Order Component


// import React from 'react'

// const HOC = (Component)=>{
//   return function(){
//     return(
//       <div style={{border:'2px solid blue'}}>
//         <Component/>
//       </div>
//     )
//   }
// }


// const Hooks = () => {
//   return (
//     <div>
//       HI I AM A SIMPLE COMPONENT
//     </div>
//   )
// }

// export const GiveBorder = HOC(Hooks)

// export default Hooks


import React from 'react'
import useFetchCounter from './customHook/CustomCounter'

const Hooks = () => {
  const {count,increment,decrement,reset}= useFetchCounter()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Hooks
