import React, { use } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../ReduxToolkit/cake/CakeSlice'

const Cake2 = () => {
    const noOfCakes = useSelector((state)=>state.cake.noOfCakes)

    const dispatch = useDispatch()

  return (
    <div>
      <h1>noOfCakes :{noOfCakes}</h1>
      <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default Cake2
