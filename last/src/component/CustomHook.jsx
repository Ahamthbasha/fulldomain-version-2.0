import React, { useEffect, useState } from 'react'

const CustomHook = () => {
    const [load,setLoad] = useState(false)
    const [data,setData] = useState([])
    const [error,setError] = useState('')
    
    async function fetchUser(){
        try{
            setLoad(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setData(data)
        }catch(error){
            setError(error.message)
        }
        finally{
            setLoad(false)
        }
    }

    useEffect(()=>{
        fetchUser()
    },[])

  return {load,data,error}
}


export default CustomHook
