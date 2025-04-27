import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [data,setData] = useState('')

    // const receiveData=(data)=>{
    //     setData(data)
    // }
  return (
    <div>
      <h1>Parent</h1>
      <h2>data</h2>
      <Child setData={setData}/>
    </div>
  )
}

export default Parent
