// import React from 'react'

// import { useContext } from 'react'
// import { CreateContext } from './Create'



// const Show = () => {
//     const {count} = useContext(CreateContext)
//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default Show


import React from 'react'
import { useContext } from 'react'
import { CreateContext } from './Create'

const Show = () => {
    const {toggle} = useContext(CreateContext)
  return (
    <div>
      <input type="checkbox" checked={toggle}/>
    </div>
  )
}

export default Show

