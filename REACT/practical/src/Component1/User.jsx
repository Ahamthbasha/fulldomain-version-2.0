import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const {id} = useParams()
  return (
    <div>
      <h1> user:{id}</h1>
    </div>
  )
}

export default User
