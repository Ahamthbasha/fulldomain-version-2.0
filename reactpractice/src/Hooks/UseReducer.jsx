import React, { useReducer } from 'react'

const UseReducer = () => {
    const reducer =(state,action)=>{
        switch(action.type){
            case 'INCREMENT':
                return {...state,count:state.count+1}
            case 'DECREMENT':
                return {...state,count:state.count-1}
            case 'RESET':
                return {...state,count:0}
            default:
                return state
        }
    }
    
    const initialState ={count : 0}

    const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <h1>count value is: {state.count}</h1>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
      <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>

    </div>
  )
}

export default UseReducer
