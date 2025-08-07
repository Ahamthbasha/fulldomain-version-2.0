// import React, { useContext } from 'react'
// import { createdContext } from './Context'

// const Increment = () => {
//     const {increment} = useContext(createdContext)

//   return (
//     <div>
//         <button onClick={increment}>inCrement</button>  
//     </div>
//   )
// }

// export default Increment


import React, { useContext } from 'react'
import { createdContext } from './Context'

const Increment = () => {
    const {changeToggle} = useContext(createdContext)
  return (
    <div>
      <button onClick={changeToggle}>change</button>
    </div>
  )
}

export default Increment
