import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeaction'

const Cake = (props) => {
  return (
    <div>
      <h1>Num of cakes:{props.numOfCakes}</h1>
      <h2>item:{props.item}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}

const mapStateToProps=(state,ownProps)=>{
    const item=ownProps.cake ? state.numOfCakes : 100

    return {
        item:item,
        numOfCakes:state.numOfCakes
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cake)
