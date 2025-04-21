import React, {createContext,useState } from 'react'

export const CreateContext= createContext()

const CreateContextProvider = ({children}) => {
    const [no,setNo] = useState(0)

    const increment=()=>{
        setNo((no)=>no+1)
    }

    const decrement=()=>{
        setNo((no)=>no-1)
    }

    const reset=()=>{
        setNo(0)
    }

  return (
    <CreateContext.Provider value={{no,increment,decrement,reset}}>
      {children}
    </CreateContext.Provider>
  )
}

export default CreateContextProvider