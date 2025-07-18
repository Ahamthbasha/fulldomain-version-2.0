// 1. Basic Component Optimization
// ✅ Task: Create a parent component with two states (count, text).
// ✅ Create a child component that only accepts count as a prop.
// ❓ Question: How can you prevent the child from re-rendering when text changes?

// import React, { memo, useState } from 'react'

// const ChildComponent = memo(({count}) => {
//     console.log('child component rendered')
//     return(
//         <>
//         <h1>{count}</h1>
//         </>
//     )
// })

// const Practice = () => {
//     const [text,setText] = useState('')
//     const [count,setCount] = useState(0)

//     const increment = () => {
//         setCount((count)=>count+1)
//     }
//   return (
//     <div>
//       <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />

//       <button onClick={increment}>Increment</button>

//       <ChildComponent count = {count}/>
//     </div>
//   )
// }

// export default Practice


// 2. Prevent Unnecessary Re-Renders
// ✅ Task: Pass a callback and a value as props to a child.
// ❓ Question: What happens if you don’t wrap the child in React.memo? How do you fix that?

// import React, { memo, useCallback, useState } from 'react'

// const ChildComponent = memo(({increment,count}) => {
//     console.log("child component rendered")
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={increment}>Increment</button>
//         </>
//     )
// })

// const Practice = () => {
//     const [count,setCount] = useState(0)
//     const [text,setText] = useState('')
//     const increment = useCallback(() => {
//         setCount((count)=>count+1)
//     },[])
//   return (
//     <div>
//       <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
//       <ChildComponent count={count} increment={increment}/>
//     </div>
//   )
// }

// export default Practice


// 3. Expensive Computation
// ✅ Task: Write a function that calculates a large factorial.
// ❓ Question: How can you prevent it from recalculating on every render when unrelated state (like text input) changes?


// import React, { useMemo, useState } from 'react'

// const Practice = () => {
//     const [text,setText] = useState('')
//     const [count,setCount] = useState(1)

//     const factorial = useMemo(()=>{
//         console.log("calculating")
//         let square = 1
//         for(let i=0;i<=1000;i++){
//             square = count * count
//         }

//         return square
//     },[count])

//     const increment = () => {
//         setCount((count)=>count+1)
//     }

//   return (
//     <div>
//     <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
//     <h1>{factorial}</h1>
//     <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// export default Practice


// 4. Memoized Filtering
// ✅ Task: Create a list of numbers and a search input.
// ❓ Question: Use useMemo to only filter the list when the input changes.
// Bonus: Show console logs to track when the filtering runs.

// import React, { useMemo, useState } from 'react'

// const Practice = () => {
//     const [text,setText] = useState('1')

//     const no = [1,2,3,4,5,6,7,8,9,10,11,12]

//     const filter =useMemo(()=>{
//         return no.filter((val)=>{
//             return val.toString().includes(text)
//         })
//     },[text])
//   return (
//     <div>
//       <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
//       <ul>
//         {
//             filter.map((val)=>(
//                 <li>{val}</li>
//             ))
//         }
//       </ul>
//     </div>
//   )
// }

// export default Practice


// 5. Dependent Memoization
// ✅ Task: Create two useMemo values: one for sum, one for average.
// ❓ Question: Can you make average only update when sum changes?


import React, { useCallback, useMemo, useState } from 'react'

const Practice = () => {
    const [count,setCount] = useState(0)

    const sum = useMemo(()=>{
        let add = 0
        for(let i=0;i<=count;i++){
            add += i
        }
        return add
    },[count])

    const average = useMemo (()=>{
        
        return count == 0 ? 0 : sum/count
    },[sum])

    const increment = useCallback(() => {
        setCount((count)=>count+1)
    },[])

  return (
    <div>
    <h1>{sum}</h1> 
    <h2>{average}</h2> 
    <h1>{count}</h1>

    <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Practice
