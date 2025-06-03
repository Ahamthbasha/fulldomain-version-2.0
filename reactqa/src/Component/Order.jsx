import React from 'react'
import { useParams } from 'react-router'

const Order = () => {
    const {orderId} = useParams()

  return (
    <div>
    <h1>your order id is :{orderId}</h1>  
    </div>
  )
}

export default Order
