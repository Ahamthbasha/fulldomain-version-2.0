const redux = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware



const BUY_ICECREAM ='BUY_ICECREAM'
const BUY_CAKE ='BUY_CAKE'

function buyIceCream(){
    return {
        type:BUY_ICECREAM
    }
}

function buyCake(){
    return {
        type:BUY_CAKE
    }
}

const cakeState = {
    noOfCakes : 10
}

const iceCreamState ={
    noOfIceCreams : 10
}

const cakeReducer =(state=cakeState,action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes : state.noOfCakes-1
            }
        default :
        return state
    }
}


const iceCreamReducer = (state = iceCreamState,action) =>{
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIceCreams:state.noOfIceCreams-1
            }
        default :
        return state
    }
}

const allReducers = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store = createStore(allReducers,applyMiddleware(logger))

const unsubscribe = store.subscribe(()=>{})

store.dispatch(buyCake())
store.dispatch(buyIceCream())

unsubscribe()