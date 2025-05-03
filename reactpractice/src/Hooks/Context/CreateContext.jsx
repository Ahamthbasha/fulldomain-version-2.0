import React, { createContext, useState } from 'react'

export const context = createContext()

const CreateContext = ({children}) => {

    const [toggle,setToggle] = useState(false)

    const toggleFn=()=>{
        setToggle((toggle)=>!toggle)
    }

  return (
    <context.Provider value={{toggle,toggleFn}}>
      {children}
    </context.Provider>
  )
}

export default CreateContext
