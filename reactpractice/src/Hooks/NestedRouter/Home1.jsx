import React from 'react'
import { Outlet } from 'react-router-dom'

const Home1 = () => {
  return (
    <div>
      <h1>Home details</h1>
      <Outlet/>
    </div>
  )
}

export default Home1
