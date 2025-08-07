// import React, { createContext, useState } from 'react'

// export const createdContext = createContext()

// const Context = ({children}) => {
//     const [no,setNo] = useState(0)

//     const increment = ()=>{
//         setNo((no)=>no+1)
//     }

//     const decrement = ()=>{
//         setNo((no)=>no-1)
//     }

//     const reset = ()=>{
//         setNo(0)
//     }

//   return (
//     <createdContext.Provider value={{no,increment,decrement,reset}}>
//       {children}
//     </createdContext.Provider>
//   )
// }

// export default Context



import React, { createContext, useState } from 'react'

export const createdContext = createContext()

const Context = ({children}) => {
    const [toggle,setToggle] = useState(false)

    const changeToggle = ()=>{
        setToggle((toggle)=>!toggle)
    }

  return (
    <createdContext.Provider value={{toggle,changeToggle}}>
      {children}
    </createdContext.Provider>
  )
}

export default Context
