import React, { useContext } from 'react'
import { themerSwitcher } from './ContextCreation'

const ThemedBox = () => {
    const {toggle} = useContext(themerSwitcher)

  return (
    <div style={{background: toggle ? 'black' : 'red'}}>
        hello
    </div>
  )
}

export default ThemedBox
