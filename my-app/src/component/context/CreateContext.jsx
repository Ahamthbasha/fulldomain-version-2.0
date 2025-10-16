// import React from 'react'
// import { useState } from 'react'
// import { createContext } from 'react'

// export const context = createContext()

// const CreateContext = ({children}) => {

//     const [count,setCount] = useState(0)

//     const increment = ()=>{
//         setCount((count)=>count+1)
//     }

//   return (
//     <context.Provider value={{count,increment}}>
//       {children}
//     </context.Provider>
//   )
// }

// export default CreateContext






import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext()

const CreateContext = ({children}) => {
    const [toggle,setToggle] = useState(false)

    const toggling = useCallback(()=>{
        setToggle((toggle)=>!toggle)
    },[])
  return (
    <Context.Provider value={{toggle,toggling}}>
      {children}
    </Context.Provider>
  )
}

export default CreateContext
