import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeaction'
const Cakes = () => {
    
    const numOfCakes=useSelector((state)=>state.numOfCakes)

    const dispatch=useDispatch()

  return (
    <div>
    <h1>NumofCakes:{numOfCakes}</h1>  
    <button onClick={()=>dispatch(buyCake())}>BuyCake</button>
    </div>
  )
}

export default Cakes
