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

// 6. Character Counter
// Create a textarea and show the number of characters typed in real time.

// 7. Multiple States
// Create a form with name, email, and password fields. Use individual useState hooks for each. On submit, show the data below the form.

// 8. Theme Toggle (Light/Dark Mode)
// Create a button that toggles the page theme between light and dark using a boolean state.

// 🔴 Advanced-Level Questions
// 9. Quiz App (Single Question)
// Display a question with multiple choices (e.g., radio buttons). Let the user select one and submit the answer. Use state to track selected choice and whether it’s correct.

// 10. Undo/Redo Counter
// Build a counter with Undo and Redo buttons using useState and arrays to store history.

// 11. Dependent State
// Create a dropdown to select a country, and based on that selection, populate a second dropdown with cities using two states.

// 12. Timer App
// Implement a start/pause/reset timer using useState and useEffect.

