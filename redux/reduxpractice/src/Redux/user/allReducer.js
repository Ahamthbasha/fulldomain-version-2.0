import {combineReducers} from 'redux'

import reducer from './userReducer'


const rootReducer = combineReducers({
    user : reducer
})

export default rootReducer