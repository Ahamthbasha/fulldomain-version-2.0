import { FETCH_USER_DATA,FETCH_USER_ERROR,FETCH_USER_REQUEST } from "./actionType";
import axios from 'axios'
const fetchRequest = () => {
    return {type:FETCH_USER_REQUEST}
}

const fetchUsers = (users) =>{
    return {type:FETCH_USER_DATA,payload:users}
}

const fetchError = (error) =>{
    return {type:FETCH_USER_ERROR,payload:error}
}


//async action


export const fetchUser =() => {
    return async (dispatch)=>{
        dispatch(fetchRequest())
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(response)
            dispatch(fetchUsers(response.data))
        } catch (error) {
            dispatch(fetchError(error.message))
        }
    }
}