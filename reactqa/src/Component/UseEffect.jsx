import React, { useEffect, useRef, useState } from 'react'

const UseEffect = () => {
    const [time,setTime] = useState(0)
    const [running,setRunning] = useState(false)
    const intervalRef = useRef(null)

    useEffect(()=>{
        if(running){
            intervalRef.current = setInterval(()=>{
                setTime((time)=>time+1)
            },1000)
        }

        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[running])

    const start = ()=>{
        if(!running){
            setRunning(true)
        }
    }

    const stop = ()=>{
        setRunning(false)
    }

    const reset = ()=>{
        setRunning(false)
        setTime(0)
    }
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseEffect
