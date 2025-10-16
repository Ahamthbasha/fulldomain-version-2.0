import React from 'react'
import { Outlet } from 'react-router-dom'

const Detail = () => {
  return (
    <div>
      Detail page
      <Outlet />
    </div>
  )
}

export default Detail
