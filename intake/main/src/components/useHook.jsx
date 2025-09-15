// import React, { useState } from 'react'

// const useHook = () => {
//     const [count,setCount] = useState(0)

//     const increment = () => {
//         setCount((count)=>{
//             return count = count + 1 
//         })
//     }

//     const decrement = () => {
//         setCount((count)=>{
//             return count = count - 1
//         })
//     }

//     const reset = () => {
//         setCount(0)
//     }

//   return {count,increment,decrement,reset}
// }

// export default useHook



















//api custom hook

import React, { useEffect, useState } from 'react'

const useHook = (url) => {
    const [post,setPost] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")

    useEffect(()=>{
        async function fetchPost(){
            try {
                setLoading(true)
                const result = await fetch(url)
                const response = await result.json()
                setPost(response)
            } catch (error) {
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
        }

        fetchPost()
    },[url])
  return {loading,error,post}
}

export default useHook
