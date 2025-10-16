// import React from 'react'
// import { useContext } from 'react'
// import { context } from './CreateContext'

// const Show = () => {
//     const {count} = useContext(context)
//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default Show


import React from 'react'
import { useContext } from 'react'
import { Context } from './CreateContext'

const Show = () => {
    const {toggle} = useContext(Context)
  return (
    <div>
      <input type="checkbox" checked={toggle} />
    </div>
  )
}

export default Show
