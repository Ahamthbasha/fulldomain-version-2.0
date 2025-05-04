import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../ReduxToolkit/user/userSlice'

const User2 = () => {
    const {load,user,error} = useSelector((state)=>state.user)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUser())
    },[])

    if(load){
        return <p>loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }
  return (
    <div>
        <h1>user2</h1>      

        <ul>
            {
                user.map((user)=>{
                    return <li key={user.id}>{user.name}</li>
                })
            }
        </ul>
    </div>
  )
}

export default User2
