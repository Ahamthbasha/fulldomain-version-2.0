// import React from 'react'
// import { CreateContext } from './Create'
// import { useContext } from 'react'

// const Increment = () => {
//     const {increment} = useContext(CreateContext)
//   return (
//     <div>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// export default Increment


import React from 'react'
import { useContext } from 'react'
import { CreateContext } from './Create'

const Increment = () => {
    const {toggleChange} = useContext(CreateContext)
  return (
    <div>
      <button onClick={toggleChange}>change</button>
    </div>
  )
}

export default Increment
