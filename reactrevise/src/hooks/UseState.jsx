// import React, { useState } from 'react'

// const UseState = () => {
//     const [count,setCount] = useState(0)

//     const Increment  = ()=>{
//         setCount((count)=>{
//            return count = count+1
//         })
//     }

//     const Decrement = () => {
//         setCount((count)=>{
//            return count = count - 1
//         })
//     }

//     const Reset = () => {
//         setCount((count)=>{
//            return count = 0
//         })
//     }
//   return (
//     <div>
//         <h1>{count}</h1>
//       <button onClick={Increment}>Increment</button>
//       <button onClick={Decrement}>Decrement</button>
//       <button onClick={Reset}>Reset</button>
//     </div>
//   )
// }

// export default UseState

// 1. Counter with Step Value
// Create a counter that increments and decrements by a step value (e.g., +5, -5) instead of just 1. Add an input to set the step value dynamically.

// import React, { useState } from 'react'

// const UseState = () => {
//     const [count,setCount] = useState(0)
//     const [value,setValue] = useState(0)

//     const increment = ()=>{
//         setCount((count)=> count + Number(value))
//     }

//     const decrement = () => {
//         setCount((count)=>count - Number(value))
//     }

//     const handleStepChange =(e) => {
//         setValue(e.target.value)
//     }

//   return (
//     <div>
//         <h1>{count}</h1>
//       <input type="text" value={value} onChange={handleStepChange}/>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// }

// export default UseState

// 2. Toggle Button
// Create a button that toggles between showing "ON" and "OFF" when clicked

// import React, { useState } from 'react'

// const UseState = () => {
//     const [toggle,setToggle] = useState(false)

//     const changeToggle = () =>{
//         setToggle((toggle)=>!toggle)
//     }

//   return (
//     <div>
//         <button onClick={changeToggle}>{toggle ? 'ON' : 'OFF'}</button>
//     </div>
//   )
// }

// export default UseState

// 3. Text Input Preview
// Make a text input field. As the user types, display the current value below the input in real-time.

// import React, { useState } from 'react'

// const UseState = () => {
//     const [value,setValue] = useState('')

//     const assignValue = (e)=>{
//         setValue(e.target.value)
//     }
//   return (
//     <div>
//         <input type="text" value={value} onChange={assignValue}/>
//         <h1>{value}</h1>
//     </div>
//   )
// }

// export default UseState

// 4. Show/Hide Password
// Build a password input field with a checkbox or toggle button that shows or hides the password text.

// import React, { useState } from 'react'

// const UseState = () => {
//     const [toggle,setToggle] = useState(false)
//     const [value,setValue] = useState('')

//     const changeToggle = () => {
//         setToggle((toggle)=>!toggle)
//     }

//     const assignValue = (e) => {
//         setValue(e.target.value)
//     }

//   return (
//     <div>
//       <input type={toggle ? 'password' : 'text'} value={value} onChange={assignValue}/>
//       <button onClick={changeToggle}>change</button>
//     </div>
//   )
// }

// export default UseState

//based on checkbox

// import React, { useState } from 'react'

// const UseState = () => {
//     const [value,setValue] = useState('')
//     const [toggle,setToggle] = useState(false)

//     const changeToggle = () => {
//         setToggle((toggle)=>!toggle)
//     }

//     const assignValue = (e) => {
//         setValue(e.target.value)
//     }
//   return (
//     <div>
//       <input type={toggle ? "text" : "password"} value ={value}  onChange={assignValue}/>
//        <label>
//         <input type="checkbox"  checked={toggle} onChange={changeToggle} />
//         ShowPassword
//         </label>
//     </div>
//   )
// }

// export default UseState


// 🟡 Intermediate-Level Questions
// 5. Dynamic List Adding 
// Build an input box and a button. When a user types something and clicks "Add", append it to a list and display the list.

// import { useState } from 'react'

// const UseState = () => {
//   const [list,setList] = useState([])
//   const [text,setText] = useState('')

//   const addToList = ()=>{
//     setList((val)=>[...val,text])
//     setText('')
//   }
//   return (
//     <div>
//       <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>

//       <button onClick={addToList}>Add To List</button>

//       <ul>
//         {
//           list.map((val)=>{
//             return <li key={val}>{val}</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }

// export default UseState


// 6. Character Counter
// Create a textarea and show the number of characters typed in real time.

// import { useState } from 'react'

// const UseState = () => {
//   const [text,setText] = useState('')

//   let handler = (e) => {
//     setText(e.target.value)
//   }

//   return (
//     <div>
//       <h1>{text.length}</h1>
//       <textarea value={text} onChange={handler}></textarea>
//     </div>
//   )
// }

// export default UseState


// 7. Multiple States
// Create a form with name, email, and password fields. Use individual useState hooks for each. On submit, show the data below the form.

// import React, { useState } from 'react'

// const UseState = () => {
//   const [name,setName] = useState('')
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')
//   const [show,setShow] = useState(false)

//   const changeToggle = () => {
//     setShow((show)=>!show)
//   }

//   return (
//     <div>
//       <label>Enter your name</label>
//       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
//       <label >Enter your email</label>
//       <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//       <label>Enter your password</label>
//       <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//       <button onClick={changeToggle}>Submit</button>

//       {
//         show && 
//         <div>
//           <p>{name}</p>
//           <p>{email}</p>
//           <p>{password}</p>
//         </div>
//       }
//     </div>
//   )
// }

// export default UseState

// 8. Theme Toggle (Light/Dark Mode)
// Create a button that toggles the page theme between light and dark using a boolean state.

// import React, { useEffect, useState } from 'react'

// const UseState = () => {
//   const [toggle,setToggle] = useState(false)

//   const changeToggle = () => {
//     setToggle((toggle)=>!toggle)
//   }

//   useEffect(()=>{
//     document.body.style.backgroundColor = toggle ? 'black' : 'white'

//     return ()=> {
//       document.body.backgroundColor = ''
//     }
//   },[toggle])

//   return (
//     <div>
//       <button onClick={changeToggle}>Toggle</button>    
//     </div>
//   )
// }

// export default UseState

// 🔴 Advanced-Level Questions
// 9. Quiz App (Single Question)
// Display a question with multiple choices (e.g., radio buttons). Let the user select one and submit the answer. Use state to track selected choice and whether it’s correct.

// import React, { useState } from 'react'

// const UseState = () => {
//     const question =  {
//         text:"Batman city was",
//         options: ["Gotham","Metropolis"],
//         correctAnswer : "Gotham"
//     }

//     const [selectedOption,setSelectedOption] = useState('')
//     const [check,setCheck] = useState(false)
//     const [toggle,setToggle] = useState(false)
//     const handleSelectedOption = (e) => {
//         setSelectedOption(e.target.value)
//     }

//     const changeToggle = () => {
//         setToggle((toggle)=>!toggle)
//         checkAnswer()
//     }

//     const checkAnswer = () => {
//         setCheck(()=>selectedOption === question.correctAnswer)
//     }

//   return (
//     <div>
//     <h1>{question.text}</h1>
//     {
//         question.options.map((val)=>
//         <div key={val}>
//             <input type="radio" value={val} onChange={handleSelectedOption} checked={selectedOption == val}/>
//             {val}
//         </div>
//         )
//     }

//     <button onClick={changeToggle}>submit</button>

//     {
//         toggle && 
        
//         <div>{check ? "correctAnswer" : "wrongAnswer"}</div>
//     }
//     </div>
//   )
// }

// export default UseState



// 10. Undo/Redo Counter
// Build a counter with Undo and Redo buttons using useState and arrays to store history.

// import React, { useState } from 'react'

// const UseState = () => {
//     const [history,setHistory] = useState([0])
//     const [pointer,setPointer] = useState(0)

//     const currentPointer = history[pointer]

//     const updateCount = (newCount) => {
//         const updateHistory = history.slice(0,pointer+1)
//         updateHistory.push(newCount)
//         setHistory(updateHistory)
//         setPointer(updateHistory.length-1)
//     }

//     const increment = () => {
//         updateCount(currentPointer+1)
//     }

//     const decrement = () => {
//         updateCount(currentPointer - 1)
//     }

//     const undo = () => {
//         if(pointer > 0){
//             setPointer(pointer-1)
//         }
//     }

//     const redo = () => {
//         if(pointer < history.length-1){
//             setPointer(pointer+1)
//         }
//     }
//   return (
//     <div>
//     <h1>{currentPointer}</h1>  
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//     <button onClick={undo} disabled={pointer == 0}>undo</button>
//     <button onClick={redo} disabled={pointer == history.length-1}>Redo</button>
//     </div>
//   )
// }

// export default UseState



// 11. Dependent State
// Create a dropdown to select a country, and based on that selection, populate a second dropdown with cities using two states.

// import React, { useState } from 'react'

// const UseState = () => {
//     const countryCity = {
//         USA : ['new york','los angeles'],
//         INDIA : ['TamilNadu','Mumbai']
//     }

//     const [country,setCountry] = useState(['USA'])
//     const [city,setCity] = useState(['USA'][0])

//     const handlechangeCountry = (e) => {
//         const selectedCountry = e.target.value
//         setCountry([selectedCountry])
//         setCity([selectedCountry][0])
//     }

//     const handleChangeCity = (e) => {
//         setCity(e.target.value)
//     }
//   return (
//     <div>
//     <select onChange={handlechangeCountry}>
//         {Object.keys(countryCity).map((countryName)=>(
//         <option value={countryName}>
//         {countryName}    
//         </option>    
//         ))}
//     </select>  

//     <select onChange={handleChangeCity}>
//         {
//             countryCity[country].map((city)=>(
//                 <option value={city}>
//                     {city}
//                 </option>
//             ))
//         }
//     </select>

//     <p>selected country : {country} and selected city is : {city}</p>
//     </div>
//   )
// }

// export default UseState


// 12. Timer App
// Implement a start/pause/reset timer using useState and useEffect.

// import { useRef, useState } from 'react'

// const UseState = () => {
//   const [timer,setTimer] = useState(0)
//   const timerRef = useRef()

//   const start = () => {
//     if(!timerRef.current){
//       timerRef.current = setInterval(() => {
//         setTimer((timer)=>timer+1)
//       }, 1000);
//     }
//   }

//   const stop = () => {
//     clearInterval(timerRef.current)
//     timerRef.current = null
//   }

//   const reset = () => {
//     stop()
//     setTimer(0)
//   }

//   return (
//     <div>
//       <h1>{timer}</h1>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>    
//     </div>
//   )
// }

// export default UseState

// import React, { useEffect, useState } from 'react'

// const UseState = () => {
//   const [timer,setTimer] = useState(0)
//   const [running,setRunning] = useState(false)

//   useEffect(()=>{
//     let interval
//     if(running){
//       interval = setInterval(()=>{
//         setTimer((timer)=>timer+1)
//       },1000)
//     }

//     return ()=>clearInterval(interval)
//   },[running])

//   let start = ()=>{
//     setRunning(true)
//   }

//   let stop = () => {
//     setRunning(false)
//   }
  
//   let reset = () => {
//     setRunning(false)
//     setTimer(0)
//   }
//   return (
//     <div>
//       <h1>{timer}</h1>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default UseState


// import React, { useEffect, useState} from 'react'

// const UseState = () => {

//     const [count,setCount] = useState(0)
//     const [running,setRunning] = useState(false)

//     useEffect(()=>{
//         let ref

//         if(running){
//             ref = setInterval(()=>{
//                 setCount((count)=>count+1)
//             },1000)
//         }

//         return ()=>{
//             clearInterval(ref)
//         }
//     },[running])

//     const start = () => {
//         setRunning(true)
//     }

//     const stop = () => {
//         setRunning(false)
//     }

//     const reset = () => {
//         setRunning(false)
//         setCount(0)
//     }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default UseState


// import React, { useEffect, useState } from 'react'

// const UseState = () => {
//     const [width,setWidth] = useState(window.innerWidth)

//     useEffect(()=>{

//         const resize =() => {
//         setWidth(window.innerWidth)
//         }    

//         window.addEventListener('resize',resize)

//         return ()=>{
//             window.removeEventListener('resize',resize)
//         }
//     },[])
//   return (
//     <div>
//       <h1>{width}</h1>
//     </div>
//   )
// }

// export default UseState
