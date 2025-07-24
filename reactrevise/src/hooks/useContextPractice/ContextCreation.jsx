import React, { createContext, useCallback, useState } from 'react'

export const themerSwitcher = createContext()

const ContextCreation = ({children}) => {
    const [toggle,setToggle] = useState(false)

    const changeToggle = useCallback(()=>{
        setToggle((toggle)=>!toggle)
    },[])
  return (
    <themerSwitcher.Provider value={{toggle,changeToggle}}>
      {children}
    </themerSwitcher.Provider>
  )
}

export default ContextCreation
