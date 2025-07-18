import { memo, useCallback, useState } from 'react'

const ChildComponent = memo(({increment}) => {
    console.log('child component')
    return(
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    )
})


const UseCallback = () => {
    const [text,setText] = useState('')

    const [count,setCount] = useState(0)

    const increment = useCallback(() => {
        console.log("calculating")
        setCount((count)=>count+1)
    },[])

  return (
    <div>
        <h1>{count}</h1>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />

      <ChildComponent increment = {increment} />
    </div>
  )
}

export default UseCallback
