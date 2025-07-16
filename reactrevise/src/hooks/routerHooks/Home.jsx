import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()

    const navigateToContact = () => {
        navigate("/contact")
    }
  return (
    <div>
      Homessdfsdf
      <button onClick={navigateToContact}>go to Contact</button>
    </div>
  )
}

export default Home
