// import React, { useState } from 'react'

// const Count = () => {
//     const [count,setCount] = useState(1)
    
//     const increment = () => {
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
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default Count


// import { useEffect, useState } from 'react'

// const Count = () => {

//     const [load,setLoad] = useState(false)
//     const [data,setData] = useState([])
//     const [error,setError] = useState('')

//     async function getUser(){
//         try {
//             setLoad(true)

//             const response = await fetch('https://jsonplaceholder.typicode.com/users')

//             const data = await response.json()

//             console.log(data)
//             setData(data)
//         } catch (error) {
//             setError(error.message)
//         }
//         finally{
//             setLoad(false)
//         }
//     }

//     useEffect(()=>{
//         getUser()
//     },[])

//     if(load){
//         return <h1>Loading...</h1>
//     }

//     if(error){
//         return <h1>{error}</h1>
//     }

//   return ( 
//     <div>
//         <ul>
//         {
//             data.map((val)=>{
//                 return <li key={val.id}>{val.name}</li>
//             })
//         }
//         </ul>  
//     </div>
//   )
// }

// export default Count

// import React, { useState } from 'react'

// const Count = () => {
//     const [text,setText] = useState('')
    
//   return (
//     <div>
//        <input type="text" onChange={(e)=>setText(e.target.value)}/>
//       <h1>{text}</h1>
//     </div>
//   )
// }

// export default Count


// import React, { useRef, useState } from 'react'

// const Count = () => {
//     const inputRef = useRef()
//     const [toggle,setToggle] = useState(false)
    
//     const changeToggle = ()=>{
//         setToggle((toggle)=>!toggle)
//     }

//   return (
//     <div>
//       <input type="text" ref={inputRef}/>

//       <button onClick={changeToggle}>click</button>

//       {toggle && <h1>{inputRef.current.value}</h1>}
//     </div>
//   )
// }

// export default Count

// import React, { useRef } from 'react'

// const Count = () => {
//     const inputRef = useRef()

//     const focus = () => {
//         inputRef.current.focus()
//     }
//   return (
//     <div>
//       <input type="text" ref={inputRef}/>
//       <button onClick={focus}>click</button>
//     </div>
//   )
// }

// export default Count


// import React, { useRef, useState } from 'react'

// const Count = () => {

//     const [time,setTime] = useState(0)
//     const timeRef = useRef()

//     const start = ()=>{
//         if(timeRef.current){
//             return
//         }
//         timeRef.current = setInterval(()=>{
//             setTime((time)=>time+1)
//         },1000)
//     }

//     const stop = ()=>{
//         clearInterval(timeRef.current)
//         timeRef.current = null
//     }

//     const reset = ()=>{
//         setTime(0)
//     }

//   return (
//     <div>
//     <h1>{time}</h1>  
//     <button onClick={start}>Start</button>
//     <button onClick={stop}>Stop</button>
//     <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default Count

// import React, { useRef } from 'react'

// const Count = () => {

//     const color = useRef()

//     const changeColor = () => {
//         color.current.style.color = 'red'
//     }
//     return (
//     <div>
//       <h1 ref={color}>hello basha</h1>

//       <button onClick={changeColor}>change color</button>
//     </div>
//   )
// }

// export default Count


// import React, { useState } from 'react'

// const ChildComponent = ({increment}) => {

//     return(
//         <button onClick={increment}>increment</button>
//     )
// }


// const Count = () => {
//     const [count,setCount] = useState(0)

//     const increment = () => {
//         setCount((count)=>count+1)
//     }
//   return (
//     <div>
//     <h1>{count}</h1>  
//     <ChildComponent increment={increment}/>
//     </div>
//   )
// }

// export default Count

// import React, { useState } from 'react'

// const ChildComponent = ({sendData}) => {
//     const [text,setText] = useState('')

//     const send = () => {
//         sendData(text)
//     }

//     return(
//         <>
//         <h1>ChildComponent</h1>
//         <input type="text"  onChange={(e)=>setText(e.target.value)}/>
//         <button onClick={send}>sendData</button>
//         </>
        
//     )
// }


// const Count = () => {
//     const [data,setData] = useState('')

//     const receivedData = (data) => {
//         setData(data)
//     }

//   return (
//     <div>
//     <h1>parent Component:{data}</h1>
//     <ChildComponent sendData={receivedData}/>
//     </div>
//   )
// }

// export default Count


// import React, { forwardRef, useRef } from 'react'

// const ChildComponent = forwardRef((props,ref) => {

//     return(
//         <>
//         <input type="text" ref={ref}/>
//         </>
//     )
// })


// const Count = () => {
//     const inputRef = useRef()

//     const focus = () => {
//         inputRef.current.focus()
//     }
//   return (
//     <div>
//       <ChildComponent ref={inputRef}/>
//       <button onClick={focus}>Focus</button>
//     </div>
//   )
// }

// export default Count

// import React, { useMemo, useState } from 'react'

// const ChildComponent = ({square}) => {
//     console.log('child component')

//     return(
//         <div>
//             <h1>{square}</h1>
//         </div>
//     )
// }

// const Count = () => {
//     const [number,setNumber] = useState(1)

//     const square = useMemo(()=>{
//         return number * number
//     },[number])


//   return (
//     <div>
//       <h1>number is :{number}</h1>
//       <button onClick={()=>setNumber((number)=>number+1)}>Increment</button>
//       <ChildComponent square={square}/>
//     </div>
//   )
// }

// export default Count


// import React, { useCallback, useState } from 'react'

// const ChildComponent = React.memo(({increment}) => {
//     console.log('childComponent')
//     return(
//         <>
//         <button onClick={increment}>increment</button>
//         </>
//     )
// })

// const Count = () => {
//     const [count,setCount] = useState(1)
//     const [text,setText] = useState('')

//     const increment = useCallback(()=>{
//         setCount((count)=>count+1)
//     },[])

//   return (
//     <div>
//         <input type="text" onChange={(e)=>setText(e.target.value)} />
//     <h1>{count}</h1>
//     <ChildComponent increment={increment}/>  
//     </div>
//   )
// }

// export default Count


// import React, { useReducer } from 'react'
// const Count = () => {
//     const initialState = {
//         count:0
//     }
//     const reducerFn = (state,action)=>{
//         switch(action.type){
//             case 'INCREMENT':
//                 return {count:state.count+1}
//             case 'DECREMENT':
//                 return {count:state.count-1}
//             case 'RESET':
//                 return {count:0}
//         }
//     }
//     const [state,dispatch] = useReducer(reducerFn,initialState)

//   return (
//     <div>
//     <h1>{state.count}</h1>
//     <button onClick={()=>dispatch({type:'INCREMENT'})}>INcrement</button>  
//     </div>
//   )
// }

// export default Count


import React, { useReducer } from 'react'

const Count = () => {

    const initialState = {
        count : 0
    }

    const reducerFn = (state,action)=>{
        switch(action.type){
            case 'INCREMENT':
                return {count:state.count+1}
            case 'DECREMENT':
                return {count:state.count-1}
            case 'RESET':
                return {count:0}
        }
    }

    const [state,dispatch] = useReducer(reducerFn,initialState)
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
    </div>
  )
}

export default Count
