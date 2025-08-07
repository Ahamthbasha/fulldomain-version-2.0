import React from 'react'
import { Outlet } from 'react-router-dom'

const DetailPage = () => {
  return (
    <div>
      <h1>This is detail page</h1>
      {<Outlet/>}
    </div>
  )
}

export default DetailPage
