// import React, { useMemo, useState } from 'react'

// const ChildComponent = React.memo(({number}) => {

//     const square = useMemo(()=>{
//         console.log('child component')
//         return number * number
//     },[number])

//     return(
//         <div>
//             {square}
//         </div>
//     )
// })

// const Week2 = () => {
//     const [no,setNo] = useState(0)
//     const [input,setInput] = useState('')

//     const increment = ()=>{
//         setNo((no)=>no+1)
//     }

//     console.log('parent component')

//   return (
//     <div>
//       <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
//       <h1>{no}</h1>
//       <button onClick={increment}>Increment</button>
//       <ChildComponent number={no}/>
//     </div>
//   )
// }

// export default Week2

// import React, { useCallback, useState } from 'react'

// const ChildComponent = ({increment})=>{
//     return(
//         <div>
//             <button onClick={increment}>increment</button>
//         </div>
//     )
// }

// const Week2 = () => {
//     const [count,setCount] = useState(0)
//     const [input,setInput] = useState('')

//     const increment = useCallback(()=>{
//         console.log("function recreated")
//         setCount((count)=>count+1)
//     },[])

//   return (
//     <div>
//     <h1>{count}</h1>
//     <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
//     <ChildComponent increment = {increment}/>
//     </div>
//   )
// }

// export default Week2

// import React, { useReducer } from "react";

// const Week2 = () => {
//   const reducerFn = (state, action) => {
//     switch (action.type) {
//       case "increment":
//         return { count: state.count + 1 };
//       case "decrement":
//         return { count: state.count - 1 };
//       case "reset":
//         return { count: 0 };
//       default:
//         return state;
//     }
//   };

//   const initialState = {
//     count: 0,
//   };

//   const [state, dispatch] = useReducer(reducerFn, initialState);
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// };

// export default Week2;
