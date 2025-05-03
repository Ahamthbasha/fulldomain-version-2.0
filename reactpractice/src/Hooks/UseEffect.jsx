import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [load,setLoad] = useState(false)
    const [data,setData] =  useState([])
    const [error,setError]  = useState('')

    async function getData(){
        try{
            setLoad(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/users')

            const data = await response.json()

            setData(data)
        }
        catch(error){
            setError(error.message)
        }
        finally{
            setLoad(false)
        }
    }

    useEffect(()=>{
        getData()
    },[])


    if(load){
        return <p>Loading</p>
    }

    if(error){
        return <p>{error}</p>
    }

  return (
    <div>
      <h1>User list</h1>

      <ul>
        {
            data.map((user)=>{
                return <li key={user.id}>
                    name:{user.username}                   
                </li>
            })
        }
      </ul>

    </div>
  )
}

export default UseEffect
