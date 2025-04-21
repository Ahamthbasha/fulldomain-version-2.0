import React, { useContext } from 'react'

import { CreateContext } from './CreateContext'

const ShowNo = () => {
    const {no} = useContext(CreateContext)
  return (
    <div>
      <h1>{no}</h1>
    </div>
  )
}

export default ShowNo
