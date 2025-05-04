import React, { useEffect } from 'react'

import {useSelector,useDispatch} from 'react-redux'

import { fetchUser } from '../Redux/user/actions'

const User = () => {

  const {load,users,error} = useSelector((state)=>state.user)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUser())
  },[])

  if(load){
    return <p>Loading...</p>
  }

  if(error){
    return <p>{error}</p>
  }

  return (
    <div>
      <ul>
        {users.map((user)=>{
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </div>
  )
}

export default User