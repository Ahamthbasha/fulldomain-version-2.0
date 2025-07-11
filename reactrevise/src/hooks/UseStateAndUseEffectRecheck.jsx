// Build a password input field with a checkbox or toggle button that shows or hides the password text.
// import { useState } from "react"

// const UseStateAndUseEffectRecheck = () => {
//     const [password,setPassword] = useState('')
//     const [toggle,setToggle] = useState(false)

//     const handlePassword = (e) => {
//         setPassword(e.target.value)
//     }

//     const handleToggle = ()=>{
//         setToggle((toggle)=>!toggle)
//     }

//   return (
//     <div>
//         <input type={toggle ? 'text' : "password"} value = {password} onChange={handlePassword} />
//         <input type="checkbox" onChange={handleToggle}/>
//     </div>
//   )
// }

// export default UseStateAndUseEffectRecheck


// import React, { useState } from 'react'

// const UseStateAndUseEffectRecheck = () => {
//     const [list,setList] = useState([])
//     const [text,setText] = useState('')
//     const handleText = (e)=>{
//         setText(e.target.value)
//     }

//     const addToList = ()=>{
//         setList((prev)=>[...prev,text])
//         setText('')
//     }
//   return (
//     <div>
//     <input type="text" value={text} onChange={handleText}/>
//     <button onClick={addToList}>Add</button>

//     <ul>
//     {
//         list.map((val)=>{
//            return <li key={val}>{val}</li>
//         })
//     }    
//     </ul>  
//     </div>
//   )
// }

// export default UseStateAndUseEffectRecheck


// import React, { useState } from 'react'

// const UseStateAndUseEffectRecheck = () => {
//     const [text,setText] = useState('')
//     const handleText = (e)=>[
//         setText(e.target.value)
//     ]
//   return (
//     <div>
//         <textarea value={text} onChange={handleText}></textarea>     
//         <h1>No of characters:{text.length}</h1>
//     </div>
//   )
// }

// export default UseStateAndUseEffectRecheck


// import React, { useState } from 'react'

// const UseStateAndUseEffectRecheck = () => {
//     const [name,setName] = useState('')
//     const [email,setEmail] = useState('')
//     const [password,setPassword] = useState('')
//     const [submit,setSubmit] = useState(false)

//     const handleName = (e) => {
//         setName(e.target.value)
//     }

//     const handleEmail = (e)=>{
//         setEmail(e.target.value)
//     }

//     const handlePassword = (e) => {
//         setPassword(e.target.value)
//     }

//     const handleSubmit = ()=>{
//         setSubmit((submit)=>!submit)
//     }

//   return (
//     <div>
//       <input type="text" value={name} onChange={handleName} />

//       <input type="text" value ={email} onChange={handleEmail}/>

//       <input type="text" value={password} onChange={handlePassword} />

//       <button onClick={handleSubmit}>submit</button>

//       {
//         submit && 
//         <div>
//             <h1>{name}</h1>
//             <h2>{email}</h2>
//             <h3>{password}</h3>
//         </div>
//       }
//     </div>
//   )
// }

// export default UseStateAndUseEffectRecheck


// import React, { useState } from 'react'

// const UseStateAndUseEffectRecheck = () => {

//     const [toggle,setToggle] = useState(false)

//     const handleToggle = () => {
//         setToggle((toggle)=>!toggle)
//     }

//     if(toggle){
//         document.body.style.backgroundColor = 'red'
//     }else{
//         document.body.style.backgroundColor = 'black'
//     }

//   return (
//     <div>
//       <button onClick={handleToggle}>submit</button>
//     </div>
//   )
// }

// export default UseStateAndUseEffectRecheck


// import React, { useState } from 'react'

// const UseStateAndUseEffectRecheck = () => {
//     const questionAndAnswer = {
//         question :"HTML stands for",
//         options : ['hyper text markup language','hyper text machine language'],
//         correctanswer : 'hyper text markup language'
//     }

//     const [selectedOption,setSelectedOption] = useState(null)
//     const [submit,setSubmit] = useState(false)
//     const [answer,setAnswer] = useState(false)

//     const handleSelectedOption = (e) => {
//         setSelectedOption(e.target.value)
//     }

//     const handleSubmit = () => {
//         setSubmit((submit)=>!submit)
//         if(selectedOption == questionAndAnswer.correctanswer){
//             setAnswer(true)
//         }else{
//             setAnswer(false)
//         }
//     }

//   return (
//     <div>
//       <h1>{questionAndAnswer.question}</h1>
//       {
//         questionAndAnswer.options.map((val)=>
//         <>
        
//         <input type="radio" value={val} onChange={handleSelectedOption} checked={selectedOption == val}/>
//         <label>{val}</label>
//         </>
            
//         )
//       }

//       <button onClick={handleSubmit}>submit</button>
//       {submit && 
//       <div>
//         {answer ? "correct" : 'wrong'}
//       </div>
//       }
//     </div>
//   )
// }

// export default UseStateAndUseEffectRecheck
