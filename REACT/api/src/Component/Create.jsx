// import React from 'react'
// import { useState } from 'react'
// import { createContext } from 'react'

// export const CreateContext = createContext()

// const CreateProvider = ({children}) => {
//     const [count,setCount] = useState(0)

//     const increment=()=>{
//         setCount((count)=>count+1)
//     }

//     const decrement=()=>{
//         setCount((count)=>count-1)
//     }

//     const reset=()=>{
//         setCount(0)
//     }

//   return (
//     <CreateContext.Provider value={{count,increment,decrement,reset}}>
//     {children}  
//     </CreateContext.Provider>
//   )
// }

// export default CreateProvider


import React from 'react'
import { createContext,useState } from 'react'

export const CreateContext=createContext()

const CreateProvider = ({children}) => {
    const [toggle,setToggle] = useState(false)

    const toggleChange=()=>{
        setToggle((toggle)=>!toggle)
    }
  return (
    <CreateContext.Provider value={{toggle,toggleChange}}>
      {children}
    </CreateContext.Provider>
  )
}

export default CreateProvider
