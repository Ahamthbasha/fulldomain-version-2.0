import { FETCH_USER_DATA,FETCH_USER_ERROR,FETCH_USER_REQUEST } from "./actionType";

const initialState = {
    load:false,
    users:[],
    error:''
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                load:true
            }
        case FETCH_USER_DATA:
            return {
                ...state,
                load:false,
                users:action.payload,
                error:''
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                load:false,
                users:[],
                error:action.payload
            }
        default :
        return state
    }
}

export default reducer