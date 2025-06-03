import React from 'react'
import { callApi } from '../redux/action'
import { useDispatch,useSelector }from 'react-redux'
import { useEffect } from 'react'

const UserComponent = () => {
    const {load,user,error} = useSelector((state)=>state)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(callApi())
    },[])

    if(load){
        return <p>Loading</p>
    }

    if(error){
        return <p>Error</p>
    }

  return (
    <div>
      <ul>
        {
            user.map((val)=>{
                return <li key={val.id}>{val.name}</li>
            })
        }
      </ul>
    </div>
  )
}

export default UserComponent
