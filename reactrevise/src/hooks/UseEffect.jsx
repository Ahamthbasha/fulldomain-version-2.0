// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [users,setUsers] = useState([])

//     useEffect(()=>{

//         const fetchUser = async()=>{
//             const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//             const result = await response.json()
//             setUsers(result)
//         }
//         fetchUser()
//     },[])

//   return (
//     <div>
//         <ul>
//     {
//         users.map((val)=>{
//          return   <li key={val.id}>{val.name}</li>
//         })
//     }  
//         </ul>
//     </div>
//   )
// }

// export default UseEffect


// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [text,setText] = useState('')

//     useEffect(()=>{
//         console.log(text)
//     },[text])

//     const handler = (e)=>{
//         setText(e.target.value)
//     }
//   return (
//     <div>
//       <input type="text" value={text} onChange={handler} />
//     </div>
//   )
// }

// export default UseEffect


// Create a countdown timer that starts from 10 and decreases every second, with a "Stop" button.

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [time,setTimer] = useState(10)
//     const [running,setRunning] = useState(false)

//     useEffect(()=>{

//         let track
//         if(running && time > 0){
//             track = setInterval(()=>{
//                 setTimer((count)=>count-1)
//             },1000)
//         }

//         if(time == 0){
//             setRunning(false)
//         }

//         return ()=>{
//             clearInterval(track)
//         }
//     },[running,time])

//     const startCounter = () => {
//         setRunning(true)
//     }

//     const stopCounter = () => {
//         setRunning(false)
//     }

//   return (
//     <div>
//       <h1>{time}</h1>
//       <button onClick={startCounter}>start</button>
//       <button onClick={stopCounter}>Stop</button>
//     </div>
//   )
// }

// export default UseEffect


// Build a component that sets up a resize event listener on window and shows the current window size. Clean up the event listener properly.

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [width,setWidth] = useState(window.innerWidth)

//     useEffect(()=>{
//         let handleResize = ()=>{
//             setWidth(window.innerWidth)
//         }
//         window.addEventListener('resize',handleResize)

//         return ()=>{
//             window.removeEventListener('resize',handleResize)
//         }
//     },[])
//   return (
//     <div>
//       <h1>{width}</h1>
//     </div>
//   )
// }

// export default UseEffect


//  Make a component that fetches weather data based on a city input field. Fetch only when the input stops changing for 500ms (debouncing with useEffect and setTimeout)

import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [city,setCity] = useState('')
    const [info,setInfo] = useState(null)
    const handleCity = (e) => {
        setCity(e.target.value)
    }

    useEffect(()=>{
       const timeId = setTimeout(()=>{
        const fetchData = async()=>{
            try {
                const response = await fetch( `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`)
                
                const result = await response.json()

                if(result.results){
                    setInfo(result.results[0])
                }else{
                    setInfo(null)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
       },500)

    return ()=>{
        clearTimeout(timeId)
    }    
    },[city])
  return (
    <div>
      <input type="text" placeholder='enter city' value={city} onChange={handleCity} />

      {
        info ? 
        <div>
            <p>name:{info.name}</p>
              <p>Country: {info.country}</p>
        </div> : <p>search for city</p>
      }
    </div>
  )
}

export default UseEffect
