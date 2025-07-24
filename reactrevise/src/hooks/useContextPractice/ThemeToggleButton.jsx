import React, { useContext } from 'react'
import { themerSwitcher } from './ContextCreation'

const ThemeToggleButton = () => {
    const {changeToggle} = useContext(themerSwitcher)
  return (
    <div>
      <button onClick={changeToggle}>Toggle</button>
    </div>
  )
}

export default ThemeToggleButton
