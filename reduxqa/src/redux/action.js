import { FETCH_USER,FETCH_ERROR,FETCH_REQUEST } from "./type";

const initialState = {
    load:false,
    user:[],
    error:''
}

const fetchRequest = () => {
    return{
        type:FETCH_REQUEST
    }
}

const fetchUser = (users) => {
    return{
        type:FETCH_USER,
        payload:users
    }
}

const fetchError = (error) =>{
    return{
        type:FETCH_ERROR,
        payload:error
    }
}

export const userReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_REQUEST:
            return {...state,load:true}
        case FETCH_USER:
            return {...state,load:false,user:action.payload,error:''}
        case FETCH_ERROR:
            return {...state,load:false,user:[],error:action.payload}
        default:
            return state
    }
}

export const callApi = () => {
    return async (dispatch)=>{
        dispatch(fetchRequest())
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')

            const data = await response.json()

            dispatch(fetchUser(data))
        }
        catch(error){
            dispatch(fetchError(error.message))
        }
    }
}