import React, { createContext, useCallback, useState } from 'react'

export const myContext = createContext()

const ContextCreation = ({children}) => {
    const [toggle,setToggle] = useState(false)

    const changeToggle = useCallback(()=>{
        setToggle((toggle)=>!toggle)
    },[])
  return (
    <myContext.Provider value={{toggle,changeToggle}}>
      {children}
    </myContext.Provider>
  )
}

export default ContextCreation
