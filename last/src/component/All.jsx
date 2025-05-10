// import React, { useState } from 'react'

// const All = () => {
//     const [state,setState] = useState(0)
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={()=>setState((state)=>state+1)}>Increment</button>
//     </div>
//   )
// }

// export default All


// import React, { useEffect, useState } from 'react'

// const All = () => {
//     const [load,setLoad] = useState(false)
//     const [data,setData] = useState([])
//     const [error,setError] = useState('')

//     async function fetchUser(){
//         try {
//             setLoad(true)
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
//             const data = await response.json()
//             setData(data)
//         } catch (error) {
//             setError(error.message)
//         }
//         finally{
//             setLoad(false)
//         }
//     }

//     useEffect(()=>{
//         fetchUser()
//     },[])

//     if(load){
//         return <p>loading..</p>
//     }

//     if(error){
//         return <p>{error}</p>
//     }
//   return (
//     <div>
//       <h1>userList</h1>
//       <ul>
//         {
//             data.map((user)=>{
//                 return <li key={user.id}>{user.name}</li>
//             })
//         }
//       </ul>
//     </div>
//   )
// }

// export default All


// import React, { useRef } from 'react'

// const All = () => {
//     const inputRef = useRef()

//     const focus=()=>{
//         inputRef.current.focus()
//     }
//   return (
//     <div>
//     <input type="text" ref={inputRef}/>
//     <button onClick={focus}>Focus</button>  
//     </div>
//   )
// }

// export default All


// import React, { useMemo, useState } from 'react'

// const ChildComponent= ({fn})=>{
//     return (
//         <>
//         <h1>square of a no :{fn}</h1>
//         </>
//     )
// }

// const All = () => {
//     const [value,setValue] = useState(1)
//     const [text,setText] = useState('')

//     const square = useMemo(()=>{
//         return value * value
//     },[value])

//   return (
//     <div>
//         <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>

//         <ChildComponent fn={square}/>

//         <button onClick={()=>setValue((count)=>count+1)}>Increment</button>
//     </div>
//   )
// }

// export default All


// import React, { useCallback, useState } from 'react'

// const ChildComponent =({increment}) => {
//     return (
//         <>
//         <button onClick={increment}>Increment</button>
//         </>
//     )
// }

// const All = () => {
//     const [text,setText] = useState('')
//     const [value,setValue] = useState(1)

//     const increment =useCallback(()=>{
//         setValue((value)=>value+1)
//     },[])
    
//   return (
//     <div>
//       <input type="text" placeholder='enter' value={text} onChange={(e)=>setText(e.target.value)}/>

//       <h1>{value}</h1>

//       <ChildComponent increment = {increment}/>
//     </div>
//   )
// }

// export default All


// import React, { useCallback, useMemo, useState } from 'react'

// const ChildComponent = React.memo(({increment})=>{
//     console.log("child Component rendered")

//     return(
//         <>
//         <button onClick={increment}>Incremenet</button>
//         </>
//     )
// })

// const All = () => {
//     const [text,setText] = useState('')
//     const [value,setValue] = useState(1)

//     const Increment = useCallback(()=>{
//         setValue((value)=>value+1)
//     },[])

//   return (
//     <div>
//       <input type="text" placeholder='enter' value={text} onChange={(e)=>setText(e.target.value)}/>

//       <h1>{value}</h1>

//       <ChildComponent increment={Increment}/>
//     </div>
//   )
// }

// export default All

// import React, { useReducer } from 'react'

// const All = () => {

//     const initialState ={
//         count:1
//     }
//     const reducerFn = (state,action)=>{
//         switch(action.type){
//             case 'INCREMENT':
//                 return {
//                     ...state,
//                     count:state.count+1
//                 }
//             case 'DECREMENT':
//                 return {
//                     ...state,
//                     count:state.count-1
//                 }
//             case 'RESET':
//                 return {
//                     ...state,
//                     count:0
//                 }
//             default:
//                 return state
//         }
//     }

//     const [state,dispatch] = useReducer(reducerFn,initialState)

//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>

//       <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>

//       <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>

//     </div>
//   )
// }

// export default All

import React from 'react'
import { useNavigate } from 'react-router-dom'

const All = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>hello</h1>
      <button onClick={()=>navigate('/details')}>details</button>
    </div>
  )
}

export default All
