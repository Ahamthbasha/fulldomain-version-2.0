import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate=useNavigate()

  return (
    <div>
      <h1>about page</h1>

      <button onClick={()=>navigate('/home')}>Home</button>
    </div>
  )
}

export default About
