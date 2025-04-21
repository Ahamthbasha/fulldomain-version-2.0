import React, { useState , useEffect } from 'react'

const UseEffect = () => {
    const [user,setUser] = useState([])
    const [load,setLoad] = useState(false)
    const [error,setError] = useState('')

    async function users(){

        try {
            setLoad(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data=await response.json()
            setUser(data)   
        } catch (error) {
            setError(error.message)
        }
        finally{
            setLoad(false)
        }
    }

    useEffect(()=>{
        users()
    },[])

    if(load){
      return  <p>Loading...</p>
    }

    if(error){
       return <p>{error}</p>
    }
  return (
    <div>
      <ul>
        {
            user.map((user)=>{
             return   <li key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </li>
            })
        }
      </ul>
    </div>
  )
}

export default UseEffect
