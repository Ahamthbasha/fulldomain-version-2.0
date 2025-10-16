import React from 'react'
import { useParams } from 'react-router-dom'

const Getid = () => {
    const{id} = useParams()
  return (
    <div>
      your id is {id}
    </div>
  )
}

export default Getid
