// import React, { useState } from 'react'

// const ChildComponent  = ({value}) =>{
//     const sendDataToParent = ()=>{
//         value("hello basha")
//     }

//     return(
//         <button onClick={sendDataToParent}>send data</button>
//     )
// }

// const ChildToParent = () => {
//     const [message,setMessage] = useState('')
//     const [toggle,setToggle] = useState(false)

//     const togglefn=()=>{
//         setToggle((toggle)=>!toggle)
//     }

//     const setData =(data)=>{
//         setMessage(data)
//     }
//   return (
//     <div>
//     <h1>{message}</h1>
//     <button onClick={togglefn}>Toggle</button>
//     {toggle && <ChildComponent value={setData}/> } 
//     </div>
//   )
// }

// export default ChildToParent

//form submission


import React, { useState } from 'react'

const ChildComponent = ({handleData}) => {

    const passData =()=>{
        handleData("hey buddy cool")
    }

    return(
        <button onClick={passData}>Click</button>
    )

}

const ChildToParent = () => {
    const [value,setValue] = useState('')

    const handleData = (data)=>{
        setValue(data)
    }

  return (
    <div>
        <h1>parent Component:{value}</h1>
        <ChildComponent handleData={handleData}/>
    </div>
  )
}

export default ChildToParent
