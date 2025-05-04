// import React from 'react'
// import { connect } from 'react-redux'
// import { buyCake } from '../Redux/cake/cakeActionType'

// const Cake = ({noOfCakes,buyCake}) => {

//   return (
//     <div>
//       <h1>Cake Shop</h1>
//       <h2>No of Cakes:{noOfCakes}</h2>
//       <button onClick={buyCake}>buyCake</button>
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//       noOfCakes:state.cake.noOfCakes
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         buyCake:()=>dispatch(buyCake())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Cake)


// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { buyCake } from '../Redux/cake/cakeActionType'

// const Cake = () => {
//     const noOfCake = useSelector((state)=>state.cake.noOfCakes)
//     const dispatch = useDispatch()

//   return (
//     <div>
//       <h1>Cake in store</h1>
//       <h2>No of cakes now we have : {noOfCake} </h2>
//       <button onClick={()=>dispatch(buyCake())}>BuyCake</button>
//     </div>
//   )
// }

// export default Cake


import React, { useState } from 'react'
import { buyCake } from '../Redux/cake/cakeActionType'
import { connect } from 'react-redux'

const Cake = ({buyCake,noOfCakes,cakeType}) => {
  return (
    <div>
    <h1>cakes in shop</h1>
    <h2>no of cakes : {noOfCakes}</h2> 
    <h3>{cakeType}</h3>
    <button onClick={()=>buyCake()}>buyCakes</button> 
    </div>
  )
}

const mapStateToProps = (state,ownProps) => {
    const type = ownProps.cakeType 
    return {noOfCakes:state.cake.noOfCakes}
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cake)