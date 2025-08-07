import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()
  return (
    <div>
      I am homePage
      <button onClick={()=>navigate("/contact")}>ContactPage</button>
    </div>
  )
}

export default HomePage
