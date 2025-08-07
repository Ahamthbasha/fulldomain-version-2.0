import React from 'react'
import { useParams } from 'react-router-dom'

const UseProductId = () => {
    const {productId} = useParams()
  return (
    <div>
      <h1>product id is:{productId}</h1>
    </div>
  )
}

export default UseProductId
