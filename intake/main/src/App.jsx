import React, { lazy } from 'react'
import { Suspense } from 'react'

const Lazy = lazy(()=>import("./components/Lazy"))
const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
      <Lazy/>
      </Suspense>
    </div>
  )
}

export default App
