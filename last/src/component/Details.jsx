import React from 'react'
import { Outlet } from 'react-router-dom'

const Details = () => {
  return (
    <div>
      <h1>DEtails</h1>
      <Outlet/>
    </div>
  )
}

export default Details
