import React from 'react'
import { useParams } from 'react-router-dom'

const User1 = () => {
    const {id} = useParams()
  return (
    <div>
      hello mr {id}
    </div>
  )
}

export default User1
