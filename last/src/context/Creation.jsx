import React, { createContext, useState } from 'react'

export const contextCreation = createContext()

const Creation = ({children}) => {
    const [toggle,setToggle] = useState(false)

    const changeToggle = () => {
        setToggle((toggle)=>!toggle)
    }

  return (
    <contextCreation.Provider value={{toggle,changeToggle}}>
      {children}
    </contextCreation.Provider>
  )
}

export default Creation
