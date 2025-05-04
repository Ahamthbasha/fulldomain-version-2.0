// import React, {useMemo,useState } from 'react'

// const ChildComponent = ({number}) =>{
//     const factorial =useMemo(({number}) =>{
//         let fact =1
//         console.log("factorial calculation")
//         for(let i=1;i<=number;i++){
//             fact *= i
//         }
//         return fact
//     },[number])

//     return(
//         <>
//         <h1>{factorial}</h1>
//         </>
//     )
// }

// const UseMemo = () => {
//     const [count,setCount] = useState(1)

//     const Increment = () => {
//         setCount((count)=>count+1)
//     }

//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={Increment}>Increment</button>
//         <ChildComponent number={count}/>  
//     </div>
//   )
// }

// export default UseMemo

// import React, { useEffect, useState } from 'react';

// const UseMemo = () => {
//   const [load, setLoad] = useState(false);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState('');

//   async function getProduct() {
//     try {
//       setLoad(true);
//       const response = await fetch('https://dummyjson.com/products?limit=10');
//       const data = await response.json();
//       setData(data.products);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoad(false);
//     }
//   }

//   useEffect(() => {
//     getProduct();
//   }, []);

//   if (load) return <p>Loading...</p>;
//   if (error) return <p>{error.message}</p>;

//   return (
//     <div style={{ padding: '20px', backgroundColor: 'black', color: 'white' }}>
//       <h1 style={{ textAlign: 'center' }}>Products</h1>
//       <div style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         gap: '20px',
//         justifyContent: 'center'
//       }}>
//         {data.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               width: '250px',
//               backgroundColor: '#1a1a1a',
//               borderRadius: '10px',
//               padding: '16px',
//               boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
//               textAlign: 'center'
//             }}
//           >
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               style={{
//                 width: '100%',
//                 height: '150px',
//                 objectFit: 'cover',
//                 borderRadius: '8px',
//                 marginBottom: '10px'
//               }}
//             />
//             <h3 style={{ margin: '10px 0' }}>{product.title}</h3>
//             <p style={{ fontSize: '14px' }}>{product.description.slice(0, 60)}...</p>
//             <p><strong>Price: ${product.price}</strong></p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UseMemo;


// import React, { useCallback, useState } from 'react'

// const ChildComponent =React.memo(({logfn}) => {  
//     return(
//         <div>
//         </div>
//     )
// })

// const UseMemo = () => {
//     const [count,setCount] = useState(1)

//     const logFn =useCallback(()=>{
//         console.log("logging")
//     },[])
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount((count)=>count+1)}>Increment</button>

//         <ChildComponent logfn={logFn}/>
//     </div>
//   )
// }

// export default UseMemo

// import React, { useReducer } from 'react'

// const UseMemo = () => {

//     const initialState = {
//         name:'',
//         email:'',
//         age:''
//     }

//     const reducerFn = (state,action) => {
//         switch(action.type){
//             case 'UPDATE':
//                 return {...state,[action.field]:action.payload}
//             case 'RESET':
//                 return initialState
//             default:
//                 return state
//         }
//     }
//     const [state,dispatch] = useReducer(reducerFn,initialState)
//   return (
//     <div>
//         <h1>name:{state.name}</h1>
//         <h2>email:{state.email}</h2>
//         <h3>age:{state.age}</h3>

//         <input type="text" placeholder='enter name' value={state.name} onChange={(e)=>dispatch({type:'UPDATE',field:'name',payload:e.target.value})}/>

//         <input type="text" placeholder='enter email' value={state.email} onChange={(e)=>dispatch({type:'UPDATE',field:'email',payload:e.target.value})} />

//         <input type="text" placeholder='enter age' value={state.age} onChange={(e)=>dispatch({type:'UPDATE',field:'age',payload:e.target.value})}/>

//         <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>  
//     </div>
//   )
// }

// export default UseMemo



// import React, { useEffect, useReducer } from 'react'

// const UseMemo = () => {

//     const initialState ={
//         load:false,
//         data:[],
//         error:''
//     }

//     const reducerFn=(state,action)=>{
//         switch(action.type){
//             case 'UPDATE':
//                 return {...state,[action.field]:action.payload}
//             case 'RESET':
//                 return initialState
//             default:
//                 return state
//         }
//     }

//     const [state,dispatch] = useReducer(reducerFn,initialState)

//     async function fetchData(){
//         try {
//          dispatch({type:'UPDATE',field:'load',payload:true})
         
//          const response = await fetch('https://dummyjson.com/products')
//          const data = await response.json()

//          dispatch({type:'UPDATE',field:'data',payload:data.products})
//         } catch (error) {
//             dispatch({type:'UPDATE',field:'error',payload:error.message})
//         }
//         finally{
//             dispatch({type:'UPDATE',field:'load',payload:false})
//         }
//     }

//     useEffect(()=>{
//         fetchData()
//     },[])

//     if(state.load){
//         return <p>Loading</p>
//     }

//     if(state.error){
//         return <p>{state.error}</p>
//     }
//   return (
//     <div>
//       {state.data.map((product)=>{
//         return <p key={product.id}>{product.title}</p>
//       })}
//     </div>
//   )
// }

// export default UseMemo


// import React, {useReducer,useState } from 'react'

// const UseMemo = () => {

//     const initialState = {
//         email:'',
//         age:''
//     }

//     const reducer = (state,action) => {
//         switch(action.type){
//             case 'UPDATE':
//                 return {...state,[action.field]:action.payload}
//             case 'RESET':
//                 return initialState
//             default:
//                 return state
//         }
//     }

//     const [state,dispatch] = useReducer(reducer,initialState)

//     const [validateMessage,setValidateMessage] = useState('')

//     const validateForm =()=>{
//         let regEx =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/
//         if(regEx.test(state.email) && Number(state.age) >=18){
//             setValidateMessage("email is valid and you can also vote")
//         }else{
//             setValidateMessage("email is not valid and you can not also vote")
//         }
//     }

//   return (
//     <div>
//         <form>
//         <h1>email:{state.email}</h1>
//         <input type="text" placeholder='enter email' value={state.email} onChange={(e)=>dispatch({type:'UPDATE',field:'email',payload:e.target.value})} />
//         <h2>age:{state.age}</h2>
//         <input type="text" placeholder='enter age' value={state.age} onChange={(e)=>dispatch({type:'UPDATE',field:'age',payload:e.target.value})} /> 

//         <button type='button' onClick={validateForm}>Validate</button>

//         <p>{validateMessage}</p>

//         </form>      
//     </div>
//   )
// }

// export default UseMemo

// import React, { useReducer, useState } from 'react'

// const UseMemo = () => {
//     const initialState = []

//     const reducer = (state,action) => {
//         switch(action.type){
//             case 'ADDTODO':
//                 return [
//                     ...state,
//                     {
//                         id:Date.now(),
//                         text:action.payload,
//                         completed:false
//                     }
//                 ]
//             case 'TOGGLETODO':
//                 return state.map((todo)=>todo.id === action.payload ? {...todo,completed:!todo.completed} : todo)
//             case 'DELETETODO':
//                 return state.filter((todo)=>todo.id!=action.payload)
//             default:
//                 return state
//         }
//     }

//     const [state,dispatch] = useReducer(reducer,initialState)
//     const [text,setText] = useState('')

//     const addToDo=()=>{
//         dispatch({type:"ADDTODO",payload:text})
//         setText('')
//     }
//   return (
//     <div>
//     <h1>TODO</h1> 

//     <input type="text" placeholder='enter todo' value={text} onChange={(e)=>setText(e.target.value)} />
//     <button onClick={addToDo}>Add todo</button>

//     <ul>
//         {
//             state.map((todo)=>{
//                return <li key={todo.id} onClick={()=>dispatch({type:'TOGGLETODO',payload:todo.id})}>
//                     {todo.text}
//                     {todo.completed && <p>completed</p>}
//                     <button onClick={()=>dispatch({type:'DELETETODO',payload:todo.id})}>Delete</button>
//                 </li>
//             })
//         }    
//     </ul> 
//     </div>
//   )
// }

// export default UseMemo


// import React, { useReducer, useRef } from 'react'

// const UseMemo = () => {
//     const initialState = []

//     const reducer =(state,action) =>{
//         switch(action.type){
//             case 'ADDUSER':
//                 return [...state,action.payload]
//         }
//     }
//     const [state,dispatch] = useReducer(reducer,initialState)

//     const nameRef = useRef()
//     const ageRef = useRef()

//     const validate =()=>{
//         const name = nameRef.current.value
//         const age = Number(ageRef.current.value)
//         let category
//         if(age > 18){
//             category = 'adult'
//         }
//         else if(age >= 10){
//             category = 'school'
//         }
//         else{
//             category = 'kinder'
//         }
//         const newUser = {
//             name,
//             age,
//             category
//         }
//         dispatch({type:'ADDUSER',payload:newUser})
//         nameRef.current.value = null
//         ageRef.current.value = null
//     }
//   return (
//     <div>
//     <input type="text" placeholder='enter name' ref={nameRef} />

//     <input type="text" placeholder='enter age' ref={ageRef} />

//     <button onClick={validate}>Validate</button>

//     <div>
//         <ul>
//             {state.map((user)=>{
//                 return <li key={user.name}>{user.name}-{user.age}-{user.category}</li>
//             })}
//         </ul>
//     </div>
//     </div>
//   )
// }

// export default UseMemo

// import React, { useState } from 'react'

// const ChildComponent = ({sendFn}) => {

//     const sendData = () => {
//         sendFn("hi parent")
//     }

//     return(
//     <>
//     <h1>ChildComponent</h1>
//     <button onClick={sendData}>Send Data</button>
//     </>
//     )
// }

// const UseMemo = () => {
//     const [message,setMessage] = useState('')

//     const receivedMessage = (data) => {
//         setMessage(data)
//     }

//     return (
//     <div>
//     <h1>Parent component:{message}</h1>
//     <ChildComponent sendFn={receivedMessage}/>
//     </div>
//   )
// }

// export default UseMemo


//forwardRef

// import React, { forwardRef, useRef } from 'react'

// const ChildComponent = forwardRef((props,ref)=>{
//     return(
//         <input type="text" ref={ref} />
//     )
// })

// const UseMemo = () => {
//     const inputRef = useRef()

//     const focus = () => {
//         inputRef.current.focus()
//     }

//   return (
//     <div>
//     <ChildComponent ref={inputRef}/>
//     <button onClick={focus}>Click to focus</button>  
//     </div>
//   )
// }

// export default UseMemo



// import React, { useState } from 'react'

// const UseMemo = () => {
//     const [message,setMessage] = useState('')

//   return (
//     <div>
//         <input type="text" placeholder='enter something' value={message} onChange={(e)=>setMessage(e.target.value)} />

//         <h1>{message}</h1>  
//     </div>
//   )
// }

// export default UseMemo


// import React, { useRef, useState } from 'react'

// const UseMemo = () => {
//     const [toggle,setToggle] = useState(false)
//     const inputRef = useRef()
//   return (
//     <div>
//       <input type="text" placeholder='enter text' ref={inputRef}/>

//       <button onClick={()=>setToggle((toggle)=>!toggle)}>click to see</button>

//       {toggle && <h1>{inputRef.current.value}</h1>}
//     </div>
//   )
// }

// export default UseMemo


