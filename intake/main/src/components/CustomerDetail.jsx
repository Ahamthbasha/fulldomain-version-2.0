import React from 'react'
import { useParams } from 'react-router-dom'

const CustomerDetail = () => {
    const {customerId} = useParams()
  return (
    <div>
      <h1>customerId is {customerId}</h1>
    </div>
  )
}

export default CustomerDetail
