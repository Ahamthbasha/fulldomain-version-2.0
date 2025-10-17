import React from 'react'

const NormalComponent = () => {
    return(
        <div>
            This is a normal Component
        </div>
    )
}

const HOC = (WrappedComponent) => {
  return function(){
    return(
        <div style={{border:"2px solid blue"}}>
            <WrappedComponent/>
        </div>
    )
  }
}

export const EnhancedOne = HOC(NormalComponent)

export default HOC
