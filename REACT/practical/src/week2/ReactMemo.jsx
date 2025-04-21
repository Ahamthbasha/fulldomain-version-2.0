import React,{useState} from 'react'

const ChildComponent=React.memo(({no,setNo})=>{
    console.log("child")
    
    return (
        <div>
            <h1>{no}</h1>
            <button onClick={()=>setNo((no)=>no+1)}>Increment</button>
        </div>
    )
})

const ReactMemo = () => {
    const [text,setText] = useState('')
    const [no,setNo] = useState(1)
  return (
    <div>
    <input type="text" onChange={(e)=>setText(e.target.value)} />

    <ChildComponent no={no} setNo={setNo}/>
    </div>
  )
}

export default ReactMemo
