// import React, { useState } from 'react'

// const counter = () => {
//     const [count,setCount] = useState(0)

//     const increment = ()=>{
//         setCount((count)=>count+1)
//     }

//     const decrement = ()=>{
//         setCount((count)=>count-1)
//     }

//     const reset = ()=>{
//         setCount(0)
//     }

//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//         <button onClick={reset}>Reset</button>  
//     </div>
//   )
// }

// export default counter

//props

// import React from 'react'

// const ChildComponent = ({name})=>{
//     return(
//         <h1>Hello {name}</h1>
//     )
// }


// const counter = () => {
//   return (
//     <div>
//      <ChildComponent name="basha"/> 
//     </div>
//   )
// }

// export default counter


//map


// import React from 'react'

// const counter = () => {
//     const names = ["Alice", "Bob", "Charlie"];
//   return (
//     <div>
//       {
//         names.map((val)=>{
//            return <p>{val}</p>
//         })
//       }
//     </div>
//   )
// }

// export default counter


//useEffect

// import React, { useEffect, useState } from 'react'

// const counter = () => {
//     const [count,setCount] = useState(0)

//     const increment = ()=> {
//         setCount((count)=>{
//             return count = count + 1
//         })
//     }

//     useEffect(()=>{
//         console.log('component mounted and updated')

//         return(()=>{
//             console.log('component unmounted and deleted')
//         })
//     },[count])
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// export default counter



//dynamic rendering


// import React, { useState } from 'react'

// const ChildComponent = ({loggedin}) => {
    //if-else
    // if(loggedin){
    //     return <p>you are logged in</p>
    // }

    //ternary

    // return(
    // <p>{loggedin ? 'you r logged in' : 'you r not logged in'}</p>
    // )

    //short circuit

//     return(
//         <p>{loggedin && <p>you are logged in</p>}</p>
//     )

// }

// const counter = () => {
//     const [loggedin,setLoggedIn] = useState(true)
//   return (
//     <div>
//     <ChildComponent loggedin={loggedin}/>
//     </div>
//   )
// }

// export default counter

//fetching data

// import React, { useEffect, useState } from 'react'

// const counter = () => {
//     const [post,setPost] = useState([])

//     async function fetchPost(){
//         try {
//             const result = await fetch('https://jsonplaceholder.typicode.com/posts')
//             const response = await result.json()
//             setPost(response)
//         } catch (error) {
//             throw error
//         }
//     }

//     useEffect(()=>{
//         fetchPost()
//     },[])

//   return (
//     <div>
//       <ul>
//         {
//             post.map((val)=>{
//                 return <li key={val.userId}>{val.title}</li>
//             })
//         }
//       </ul>
//     </div>
//   )
// }

// export default counter


//useRef

// import React, { useRef } from 'react'

// const counter = () => {
//     const inputRef = useRef(null)
//     const focusOnInput = ()=>{
//         inputRef.current.focus()
//     }

//   return (
//     <div>
//     <input type="text" ref={inputRef} />  
//     <button onClick={focusOnInput}>Focus</button>
//     </div>
//   )
// }

// export default counter


//storing previous count. It is not like that. See after the page render then only the useEffect will run. So during that time the ui display will happen. After that only useEffect will run.

// import React, { useEffect, useRef, useState } from 'react'

// const counter = () => {
//     const [count,setCount] = useState(0)
//     const prevRef = useRef(null)

//     const increment =()=>{
//         setCount((count)=>{
//             return count = count + 1
//         })
//     }

//     useEffect(()=>{
//         prevRef.current = count
//     },[count])

//   return (
//     <div>
//     <h1>{count}</h1>
//     <h2>{prevRef.current}</h2>
//     <button onClick={increment}>Increment</button>

//     </div>
//   )
// }

// export default counter

//navigation

// import React from 'react'
// import {useNavigate} from "react-router-dom"
// const Counter = () => {
//     const navigate = useNavigate()
//   return (
//     <div>
//         <button onClick={()=>navigate('/about')}>About</button>
//     </div>
//   )
// }

// export default Counter


//Event Handler 


//onClick

// import React, { useState } from 'react'

// const counter = () => {
//     const [message,setMessage] = useState("")

//     const click = () => {
//         setMessage("button clicked")
//     }
//   return (
//     <div>
//       <h1>{message}</h1>
//       <button onClick={click}>Clicked</button>
//     </div>
//   )
// }

// export default counter

//onChange

// import React, { useState } from 'react'

// const counter = () => {
//     const [input,setInput] = useState("")
//   return (
//     <div>
//       <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
//       <h1>{input}</h1>
//     </div>
//   )
// }

// export default counter

//routing

// import React from 'react'
// import { useNavigate } from 'react-router-dom'


// const Counter = () => {
//     const navigate = useNavigate()
//   return (
//     <div>    
//         <button onClick={()=>navigate("/about")}>About</button>  
//     </div>
//   )
// }

// export default Counter


//child to parent

// import React, { useState } from 'react'

// const ChildComponent = ({msg})=>{

//   const messageToParent = ()=>{
//     msg('Good Morning parent')
//   }

//   return(
//     <button onClick={messageToParent}>Send</button>
//   )
// }


// const Counter = () => {
//   const [message,setMessage] = useState("")

//   const childMessage = (data)=>{
//     setMessage(data)
//   }

//   return (
//     <div>  
//       <h1>{message}</h1>
//       <ChildComponent msg={childMessage}/>
//     </div>
//   )
// }

// export default Counter


//usecallback

// import React, { useCallback, useState } from 'react'

// const ChildComponent = React.memo(({increment})=>{
//   return(
//     <button onClick={increment}>Increment</button>
//   )
// })

// const counter = () => {
//   const [count,setCount] = useState(0)

//   const increment = useCallback(()=>{
//     setCount((count)=>count=count+1)
//   },[])

//   return (
//     <div>
//       <h1>{count}</h1>
//       <ChildComponent increment={increment}/>    
//     </div>
//   )
// }

// export default counter

//use memo

// import React, { useCallback, useMemo, useState } from 'react'

// const ChildComponent = React.memo(({value,increment}) => {
//   console.log('child component rendered')
//   return(
//     <>
//     <h1>square is : {value}</h1>
//     <button onClick={increment}>Increment</button>
//     </>
//   )
// })

// const counter = () => {
//   const [count,setCount] = useState(0)
//   const [input,setInput] = useState("")

//   const increment = useCallback(() => {
//     setCount((count)=>{
//       return count = count + 1
//     })
//   },[])

//   const square = useMemo(()=>{
//     console.log("recalculated")
//     return count * count
//   },[count])

//   return (
//     <div>
//       <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />

//       <h1>count is : {count}</h1>

//       <ChildComponent value={square} increment={increment}/>    
//     </div>
//   )
// }

// export default counter


//context

// import React, { createContext, useState } from 'react'

// export const createCounterContext = createContext()

// const Counter = ({children}) => {
//   const [count,setCount] = useState(0)

//   const increment = () => {
//     setCount((count)=>count+1)
//   }

//   const decrement = () => {
//     setCount((count)=>count-1)
//   }

//   const reset = () => {
//     setCount(0)
//   }

//   return (
//     <createCounterContext.Provider value={{count,increment,decrement,reset}}>
//       {children}
//     </createCounterContext.Provider>
//   )
// }

// export default Counter

//use Reducer

// import React, { useReducer } from 'react'

// const counter = () => {
//   const initialState ={
//     count : 0
//   }

//   const reducerFn = (state,action)=>{
//     switch(action.type){
//       case 'INCREMENT':
//         return {count:state.count + 1}
//       case "DECREMENT":
//         return {count:state.count - 1}
//       case "RESET":
//         return {count:0}
//       default:
//         return state
//     }
//   }
//   const [state,dispatch] = useReducer(reducerFn,initialState)
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={()=>{dispatch({type:'INCREMENT'})}}>Increment</button>

//       <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>

//       <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
//     </div>
//   )
// }

// export default counter

//React Lazy

// import React, { Suspense } from 'react'
// import { lazy } from 'react'
// const Lazy = lazy(()=>import("./LazyComponent"))

// const counter = () => {

//   return (
//     <div>
//       hello
//       <Suspense fallback={<p>Loading...</p>}>
//       {<Lazy/>}
//       </Suspense>
//     </div>
//   )
// }

// export default counter


//custom Hook

// import React from 'react'
// import useHook from './useHook'

// const counter = () => {
//   const {count,increment,decrement,reset} = useHook()
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default counter

// CUSTOM HOOK

// import React from 'react'
// import useHook from './useHook'

// const Counter = () => {

//   const {loading,error,post} = useHook("https://jsonplaceholder.typicode.com/posts")

//   if(loading){
//     return <p>Loading...</p>
//   }

//   if(error){
//     return <p>{error}</p>
//   }

//   console.log(post)

//   return (
//     <div>
//       <ul>
//         {
//           post.map((val)=>{
//            return <li key={val.userId}>{val.title}</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }

// export default Counter





// TOGGLE AND UNTOGGLE A BUTTON USING CONTEXT

// import React, { createContext, useState } from 'react'

// export const toggleContext = createContext()

// const Counter = ({children}) => {
//   const [toggle,setToggle] = useState(false)

//   const changeToggle = ()=>{
//     setToggle((toggle)=>!toggle)
//   }

//   return (
//     <toggleContext.Provider value={{toggle,changeToggle}}>
//       {children}
//     </toggleContext.Provider>
//   )
// }

// export default Counter




//window width

// import React, { useEffect, useState } from 'react'

// const counter = () => {
//   const [innerWidth,setInnerWidth] = useState(window.innerWidth)

//   useEffect(()=>{

//     const handleResize = ()=>{
//       setInnerWidth(window.innerWidth)
//     }

//     window.addEventListener('resize',handleResize)

//     return()=>{
//       window.removeEventListener('resize',handleResize)
//     }
//   },[innerWidth])

//   return (
//     <div>
//       <h1>{innerWidth}</h1>    
//     </div>
//   )
// }

// export default counter


//FORWARD 

// import React, { forwardRef, useRef } from 'react'

// const ChildComponent = forwardRef((props,ref)=>{
//   return(
//     <input type="text" ref={ref} />
//   )
// })

// const Counter = () => {
//   const inputRef = useRef(null)

//   return (
//     <div>
//       <ChildComponent ref={inputRef}/>
//       <button onClick={()=>{inputRef.current.focus()}}>click to focus</button>
//     </div>
//   )
// }

// export default Counter


//timer

// import React, { useEffect, useRef, useState } from 'react'

// const counter = () => {
//   const [count,setCount] = useState(0)
//   const countRef = useRef(null)

//   const start = ()=>{
//     if(!countRef.current){
//       countRef.current = setInterval(()=>{
//         setCount((count)=>count+1)
//       },1000)
//     }
//   }
  
//   const stop = ()=>{
//     if(countRef.current){
//       clearInterval(countRef.current)
//       countRef.current = null
//     }
//   }

//   const reset = ()=>{
//     stop()
//     setCount(0)
//   }
  
//   return (
//     <div>
//       <h1>{count}</h1> 
//       <button onClick={start}>Start</button>   
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default counter


//useRef

// import React, { useRef } from 'react'

// const counter = () => {
//   const h1Ref = useRef(null)
//   const changeColour = ()=>{
//     h1Ref.current.style.backgroundColor = "red"
//   }
//   return (
//     <div>
//       <h1 ref={h1Ref}>Hello basha</h1>
//       <button onClick={changeColour}>change colour</button>
//     </div>
//   )
// }

// export default counter

//useEffect timer

// import React, { useEffect, useRef, useState } from 'react'

// const counter = () => {
//   const [count,setCount] = useState(0)
//   const refCount = useRef(null)

//   const start = ()=>{
//    if(!refCount.current){
//     refCount.current = setInterval(()=>{
//       setCount((count)=>count+1)
//     },1000)
//    }
//   }

//   const stop = ()=>{
//     if(refCount.current){
//       clearInterval(refCount.current)
//       refCount.current = null
//     }
//   }
//   useEffect(()=>{  
    
//     return(()=>{
//       if(refCount.current){
//         clearInterval(refCount.current)
//       }
//     })
//   },[])
//   return (
//     <div>
//       <h1>{count}</h1>
//     <button onClick={start}>start</button>
//     <button onClick={stop}>stop</button>
//     </div>
//   )
// }

// export default counter

