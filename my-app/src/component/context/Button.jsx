// import React from 'react'
// import { useContext } from 'react'
// import { context } from './CreateContext'

// const Button = () => {
//     const {increment} = useContext(context)
//   return (
//     <div>
//         <button onClick={increment}>increment</button>      
//     </div>
//   )
// }

// export default Button


import React from 'react'
import { useContext } from 'react'
import { Context } from './CreateContext'

const Button = () => {
    const {toggling} = useContext(Context)
  return (
    <div>
      <button onClick={toggling}>Toggle</button>
    </div>
  )
}

export default Button
