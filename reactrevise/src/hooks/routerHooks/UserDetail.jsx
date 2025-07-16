import React from 'react'
import { useParams } from 'react-router'

const UserDetail = () => {
    const {userId} = useParams()
  return (
    <div>
      <h1>your id is : {userId}</h1>
      <h2>Your name is: captain</h2>
    </div>
  )
}

export default UserDetail
