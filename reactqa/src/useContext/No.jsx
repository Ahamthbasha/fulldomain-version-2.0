// import React, { useContext } from 'react'
// import { createdContext } from './Context'

// const No = () => {
//     const {no} = useContext(createdContext)
//   return (
//     <div>
//       <h1>{no}</h1>
//     </div>
//   )
// }

// export default No


import React, { useContext } from 'react'
import { createdContext } from './Context'

const No = () => {
    const {toggle} = useContext(createdContext)
  return (
    <div>
        <input type="checkbox" checked={toggle} />  
    </div>
  )
}

export default No
