// import React, { useReducer } from 'react'

// const UseReducer = () => {
//     const reducerFn = (state,action)=>{
//         switch(action.type){
//             case "increment":
//                 return {count:state.count + 1}
//             case "decrement":
//                 return {count:state.count - 1}
//             case "reset":
//                 return {count:0}
//             default:
//                 return state
//         }
//     }
//     const [state,dispatch] = useReducer(reducerFn,{count:0})
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
//       <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
//       <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
//     </div>
//   )
// }

// export default UseReducer


// 1. ✅ Toggle Button
// Create a button that toggles between "ON" and "OFF" using useReducer.

// Expected behavior: On each click, the text switches between "ON" and "OFF".


// import React, { useReducer } from 'react'

// const UseReducer = () => {
//     const reducerFn = (state,action) => {
//         switch(action.type){
//             case "change":
//                 return {toggle:!state.toggle}
//             default :
//             return state
//         }
//     }
//     const [state,dispatch] = useReducer(reducerFn,{toggle:false})
//   return (
//     <div>
//       {state.toggle ? <h1>on</h1> : <h1>off</h1>}
//       <button onClick={()=>dispatch({type:"change"})}>ChangeToggle</button>
//     </div>
//   )
// }

// export default UseReducer


// 2. 🔢 Counter with Step
// Create a counter that can increase or decrease the count by a specific step (e.g., +5, -5).

// Initial state: { count: 0, step: 5 }

// Actions: increment, decrement, setStep


// import React, { useReducer } from 'react'

// const UseReducer = () => {
//     const reducerFn =(state,action)=>{
//         switch(action.type){
//             case "increment":
//                 return {...state,count:state.count + state.step}
//             case "decrement":
//                 return {count:state.count - 1}
//             case "setStep":
//                 return {...state,step:action.payload}
//         }
//     }
//     const [state,dispatch] = useReducer(reducerFn,{count:0,step:5})
//   return (
//     <div>
//       <input type="text" value={state.step} onChange={(e)=>dispatch({type:"setStep",payload:Number(e.target.value)})} />

//       <h1>{state.count}</h1>
//       <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
//       <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
//     </div>
//   )
// }

// export default UseReducer

//3.todo list using useReducer

import React, { useReducer, useState } from 'react'

const UseReducer = () => {
  const reducerFn=(state,action)=>{
    switch(action.type){
      case "add":
        return {...state,list:[...state.list,{id:Date.now(),text:action.payload,completed:false}]}
      case "remove":
        return {...state,list:state.list.filter((item)=>item.id != action.payload)}
      case "toggle":
        return {...state,list:state.list.map((item)=>item.id == action.payload ? {...item,completed:!item.completed} : item)}
      default :
        return state
    }
  }

  const [state,dispatch] = useReducer(reducerFn,{list:[]})
  const [input,setInput] = useState('')

  const addToList = () => {
    if(input.trim() === ''){
      return
    }
    dispatch({type:'add',payload:input})
    setInput('')
  }

  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={addToList}>Add</button>
      <ul>
      {
        state.list.map((val)=>{
         return <li key={val.id}>
            <span onClick={()=>dispatch({type:"toggle",payload:val.id})} 
            style={{textDecoration:val.completed ? 'line-through':'none'}}
              >{val.text}</span>
            <button onClick={()=>dispatch({type:'remove',payload:val.id})}>Remove</button>
          </li>
        })
      }    
      </ul>
    </div>
  )
}

export default UseReducer
