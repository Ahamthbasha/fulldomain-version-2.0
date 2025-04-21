import React from 'react'
import CreateProvider from './Component/Create'
import Show from './Component/Show'
import Increment from './Component/Increment'

const App = () => {
  return (
    <CreateProvider>
      <Show />
      <Increment />
    </CreateProvider>
  )
}

export default App
