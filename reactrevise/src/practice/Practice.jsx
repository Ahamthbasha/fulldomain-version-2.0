// // 1. Basic Component Optimization
// // ✅ Task: Create a parent component with two states (count, text).
// // ✅ Create a child component that only accepts count as a prop.
// // ❓ Question: How can you prevent the child from re-rendering when text changes?

// // import React, { memo, useState } from 'react'

// // const ChildComponent = memo(({count}) => {
// //     console.log('child component rendered')
// //     return(
// //         <>
// //         <h1>{count}</h1>
// //         </>
// //     )
// // })

// // const Practice = () => {
// //     const [text,setText] = useState('')
// //     const [count,setCount] = useState(0)

// //     const increment = () => {
// //         setCount((count)=>count+1)
// //     }
// //   return (
// //     <div>
// //       <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />

// //       <button onClick={increment}>Increment</button>

// //       <ChildComponent count = {count}/>
// //     </div>
// //   )
// // }

// // export default Practice


// // 2. Prevent Unnecessary Re-Renders
// // ✅ Task: Pass a callback and a value as props to a child.
// // ❓ Question: What happens if you don’t wrap the child in React.memo? How do you fix that?

// // import React, { memo, useCallback, useState } from 'react'

// // const ChildComponent = memo(({increment,count}) => {
// //     console.log("child component rendered")
// //     return(
// //         <>
// //         <h1>{count}</h1>
// //         <button onClick={increment}>Increment</button>
// //         </>
// //     )
// // })

// // const Practice = () => {
// //     const [count,setCount] = useState(0)
// //     const [text,setText] = useState('')
// //     const increment = useCallback(() => {
// //         setCount((count)=>count+1)
// //     },[])
// //   return (
// //     <div>
// //       <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
// //       <ChildComponent count={count} increment={increment}/>
// //     </div>
// //   )
// // }

// // export default Practice


// // 3. Expensive Computation
// // ✅ Task: Write a function that calculates a large factorial.
// // ❓ Question: How can you prevent it from recalculating on every render when unrelated state (like text input) changes?


// // import React, { useMemo, useState } from 'react'

// // const Practice = () => {
// //     const [text,setText] = useState('')
// //     const [count,setCount] = useState(1)

// //     const factorial = useMemo(()=>{
// //         console.log("calculating")
// //         let square = 1
// //         for(let i=0;i<=1000;i++){
// //             square = count * count
// //         }

// //         return square
// //     },[count])

// //     const increment = () => {
// //         setCount((count)=>count+1)
// //     }

// //   return (
// //     <div>
// //     <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
// //     <h1>{factorial}</h1>
// //     <button onClick={increment}>Increment</button>
// //     </div>
// //   )
// // }

// // export default Practice


// // 4. Memoized Filtering
// // ✅ Task: Create a list of numbers and a search input.
// // ❓ Question: Use useMemo to only filter the list when the input changes.
// // Bonus: Show console logs to track when the filtering runs.

// // import React, { useMemo, useState } from 'react'

// // const Practice = () => {
// //     const [text,setText] = useState('1')

// //     const no = [1,2,3,4,5,6,7,8,9,10,11,12]

// //     const filter =useMemo(()=>{
// //         return no.filter((val)=>{
// //             return val.toString().includes(text)
// //         })
// //     },[text])
// //   return (
// //     <div>
// //       <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
// //       <ul>
// //         {
// //             filter.map((val)=>(
// //                 <li>{val}</li>
// //             ))
// //         }
// //       </ul>
// //     </div>
// //   )
// // }

// // export default Practice


// // 5. Dependent Memoization
// // ✅ Task: Create two useMemo values: one for sum, one for average.
// // ❓ Question: Can you make average only update when sum changes?


// import React, { useCallback, useMemo, useState } from 'react'

// const Practice = () => {
//     const [count,setCount] = useState(0)

//     const sum = useMemo(()=>{
//         let add = 0
//         for(let i=0;i<=count;i++){
//             add += i
//         }
//         return add
//     },[count])

//     const average = useMemo (()=>{
        
//         return count == 0 ? 0 : sum/count
//     },[sum])

//     const increment = useCallback(() => {
//         setCount((count)=>count+1)
//     },[])

//   return (
//     <div>
//     <h1>{sum}</h1> 
//     <h2>{average}</h2> 
//     <h1>{count}</h1>

//     <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// export default Practice


// import React, { useReducer } from 'react'

// const Practice = () => {
//     const reducerFn = (state,action) => {
//         switch(action.type){
//             case "setField":
//                 return {
//                     ...state,
//                     [action.field]:action.value,
//                     setError:{
//                         [action.field] :''
//                     },
//                     submit : false
//                 }
//             case "setError":
//                 return {
//                     ...state,
//                     setError:{
//                         ...state.setError,
//                         ...action.payload
//                     }
//                 }
//             case "submit":
//                 return {
//                     ...state,
//                     submit:true
//                 }
//             default :
//             return state
//         }
//     }

//     const initialState = {
//         name:'',
//         email:'',
//         setError:{
//             name:'',
//             email:''
//         },
//         submit:false
//     }

//     const handleChange = (e) => {
//         const {name,value} = e.target
//         dispatch({type:"setField",field:name,value})
//     }

//     const validate =()=>{
//         const error = {
//             name:'',
//             email:''
//         }

//         if(!state.name){
//             error.name = "name is required"
//         }

//         if(!state.email){
//             error.email = "email is required"
//         }

//         if(error.name || error.email){
//             dispatch({type:"setError",payload:error})
//         }else{
//             dispatch({type:"submit"})
//             alert("form submitted successfully")
//         }
//     }
//     const [state,dispatch] = useReducer(reducerFn,initialState)
//   return (
//     <div>
//       <input type="text" placeholder='enter name' name='name' value={state.name} onChange={handleChange} />
//       {state.setError.name && <p>{state.setError.name}</p>}
//       <input type="text" placeholder='enter email' name='email' value={state.email} onChange={handleChange} />
//       {state.setError.email && <p>{state.setError.email}</p>}
//       <button onClick={validate}>Submit</button>

//     </div>
//   )
// }

// export default Practice

//todo

// import React, { useReducer, useState } from 'react'

// const Practice = () => {
//     const reducerFn = (state,action)=>{
//         switch(action.type){
//             case "add":
//                 return {
//                     ...state,
//                     list:[
//                         ...state.list,
//                         {id:Date.now(),text:action.payload,completed:false}
//                     ]
//                 }
//             case "remove":
//                 return {
//                     ...state,
//                     list:state.list.filter((val)=>val.id != action.payload)
//                 }
//             case "completed":{
//                 return {
//                     ...state,
//                     list:state.list.map((val)=>val.id == action.payload ? {...val,completed:true}: val)
//                 }
//             }
//             default:
//                 return state
//         }
//     }

//     const initialState = {
//         list:[]
//     }

//     const addToDo = () => {
//         if(input.trim() == ''){
//             return
//         }
//         dispatch({type:"add",payload:input})
//         setInput('')
//     }

    
//     const [state,dispatch] = useReducer(reducerFn,initialState)
//     const [input,setInput] = useState('')
//   return (
//     <div>
//       <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
//       <button onClick={addToDo}>Add</button>

//       <ul>
//         {
//             state.list.map((val)=>{
//                 return <li key={val.id}>
//                     <span onClick={()=>dispatch({type:"completed",payload:val.id})} style={{backgroundColor:val.completed ? 'red' :'blue'}}>{val.text}</span>
//                 <button onClick={()=>dispatch({type:"remove",payload:val.id})}>Remove</button>
//                 </li>
//             })
//         }
//       </ul>
//     </div>
//   )
// }

// export default Practice


// import React, { useState } from 'react'

// const ChildComponent = ({giveFn}) => {

//     const sendMessage =()=>{
//         giveFn("hello parent")
//     }
//     return(
//         <div>
//             <button onClick={sendMessage}>Click Send Message to parent</button>
//         </div>
//     )
// }

// const Practice = () => {
//     const [message,setMessage] = useState('')

//     const receivedMessage = (msg) => {
//         setMessage(msg)
//     }
//   return (
//     <div>
//         <h1>parent component:{message}</h1>
//       <ChildComponent giveFn = {receivedMessage}/>
//     </div>
//   )
// }

// export default Practice


//forward ref

// import React, { forwardRef, useRef } from 'react'

// const ChildComponent = forwardRef((props,ref)=>{
//     return(
//         <div>
//             <input type="text" ref={ref}/>
//         </div>
//     )
// })

// const Practice = () => {
//     const inputRef = useRef()

//     const focus = () => {
//         inputRef.current.focus()
//     }
//   return (
//     <div>
//         <ChildComponent ref={inputRef}/>
//       <button onClick={focus}>click To Focus</button>
//     </div>
//   )
// }

// export default Practice


// import React, { useReducer, useState } from 'react'

// const Practice = () => {
//   const reducerFn = (state,action) => {
//     switch(action.type){
//       case "addToDo":
//         return {
//           ...state,
//           list:[
//             ...state.list,
//             {id:Date.now(),text:action.payload,completed:false}
//           ]
//         }
//       case "removeToDo":
//         return {
//           ...state,
//           list:state.list.filter((val)=>val.id != action.payload)
//         }
//       case "completed" :
//         return {
//           ...state,
//           list:state.list.map((val)=>val.id == action.payload ? {...val,completed:true} : val)
//         }
//       default :
//       return state
//     }
//   }
//   const initialState = {list:[]}

//   const [state,dispatch] = useReducer(reducerFn,initialState)
//   const [input,setInput] = useState('')

//   const add = ()=>{
//     if(input.trim() == ""){
//       return
//     }

//     dispatch({type:"addToDo",payload:input})
//     setInput('')
//   }
//   return (
//     <div>
//       <input type="text" placeholder='add your task' value={input} onChange={(e)=>setInput(e.target.value)} />
//       <button onClick={add}>Add</button>

//       <ul>
//         {
//           state.list.map((val)=>(
//             <li key={val.id} >

//               <span onClick={()=>dispatch({type:"completed",payload:val.id})}>{val.text}</span>
//               {val.completed ? <p>completed</p> : <p>Not completed</p>}
//               <button onClick={()=>dispatch({type:"removeToDo",payload:val.id})}>Remove</button>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// export default Practice


// import React, { useReducer } from 'react'

// const Practice = () => {
//   const initialState = {
//     name:'',
//     email:'',
//     setErrors:{
//       name:'',
//       email:''
//     },
//     submit:false
//   }
//   const reducerFn = (state,action)=>{
//     switch(action.type){
//       case "addToField":
//         return {
//           ...state,
//           [action.field] : action.value,
//           setErrors:{
//             [action.field] : ''
//           },
//           submit:false
//         }
//       case "setError":
//         return {
//           ...state,
//           setErrors:{
//             ...state.setErrors,
//             ...action.payload
//           }
//         }
//       case "submit":
//         return {
//           ...state,
//           submit:true
//         }
//       default :
//       return state
//     }
//   }
//   const [state,dispatch] = useReducer(reducerFn,initialState)

//   const setForm = (e)=>{
//     const {name,value} = e.target
//     dispatch({type:'addToField',field:name,value})
//   }

//   const validate = () => {
//     const errors ={
//       name:'',
//       email:''
//     }

//     if(state.name.trim() == ''){
//       errors.name = 'name is required'
//     }

//     if(state.email.trim() == ''){
//       errors.email = 'email is required'
//     }

//     if(errors.name || errors.email){
//       dispatch({type:"setError",payload:errors})
//     }else{
//       dispatch({type:"submit"})
//       alert("form is successfully submitted")
//     }
//   }


//   return (
//     <div>
//       <input type="text" name='name' value={state.name} onChange={setForm} />
//       {state.setErrors.name && <p>{state.setErrors.name}</p>}
//       <input type="text" name='email' value={state.email} onChange={setForm}/>
//       {state.setErrors.email && <p>{state.setErrors.email}</p>}

//       <button onClick={validate}>Validate</button>
      
//     </div>
//   )
// }

// export default Practice


//forward ref

// import React, { forwardRef, useRef } from 'react'

// const ChildComponent = forwardRef((props,ref)=>{
//   return(
//     <div>
//       <input type="text" ref={ref}/>
//     </div>
//   )
// })

// const Practice = () => {
//   const inputRef = useRef(null)

//   const focus = () => {
//     inputRef.current.focus()
//   }
//   return (
//     <div>
//       <ChildComponent ref={inputRef}/>
//       <button onClick={focus}>Focus</button>
//     </div>
//   )
// }

// export default Practice


//child to parent

// import React, { useState } from 'react'

// const ChildComponent = ({sendMessage})=>{
//   const send = () => {
//     sendMessage("hello parent")
//   }
//   return(
//     <div>
//       <button onClick={send}>send message to parent</button>
//     </div>
//   )
// }

// const Practice = () => {
//   const [message,setMessage] = useState('')

//   const setChildMessage = (msg) => {
//     setMessage(msg)
//   }

//   return (
//     <div>
//       <h1>parent component:{message}</h1>    
//       <ChildComponent sendMessage={setChildMessage}/>
//     </div>
//   )
// }

// export default Practice


import React, { useRef, useState } from 'react'

const Practice = () => {
  const [time,setTime] = useState(0)
  const timeRef = useRef()

  const start = () => {
    if(!timeRef.current){
      timeRef.current = setInterval(()=>{
        setTime((time)=>time+1)
      },1000)
    }
  }

  const stop = () => {
    if(timeRef.current){
      clearInterval(timeRef.current)
      timeRef.current = null
    }
  }

  const reset = ()=>{
    stop()
    setTime(0)
  }

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={start}>start</button> 
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>   
    </div>
  )
}

export default Practice


//Tomorrow learn about custom hook