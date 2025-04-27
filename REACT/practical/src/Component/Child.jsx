import React,{useState} from 'react'
import Parent from './Parent'

const Child = ({setData}) => {
    const [childData,setChildData] = useState('hello parent')

    // onSend=(data)=>{
         
    // }
  return (
    <div>
      <h1>Child</h1>
      <button onClick={()=> setData(childData)}> BUTTON </button>
    </div>
  )
}

export default Child
