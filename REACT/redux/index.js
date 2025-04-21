// {
//     type:"INCREMENT"
// }

// function actionCreator(){
//     return {
//         type:"INCREMENT"
//     }
// }

// console.log(actionCreator())


// const BUY_CAKE="BUY_CAKE"

// const initialState={
//     count:0
// }
// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 count:state.count+1
//             }
//     }
// }

// const redux=require('redux')
// const reduxLogger=require('redux-logger')
// const createLogger=reduxLogger.createLogger()
// const applyMiddleware=createLogger.applyMiddleware
// const createStore=redux.createStore
// const combineReducer=redux.combineReducers

// const BUY_CAKE='BUY_CAKE'
// const BUY_ICECREAM='BUY_ICECREAM'

// function buyCake(){
//     return{
//         type:BUY_CAKE
//     }
// }

// function buyIceCream(){
//     return{
//         type:BUY_ICECREAM
//     }
// }

// const cakeState={
//     numOfCakes:10
// }

// const iceCreamState={
//     numOfIceCreams:20
// }

// const cakeReducer=(state=cakeState,action)=>{
//     switch(action.type){
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCakes:state.numOfCakes-1
//             }
//         default:
//             return state
//     }
// }

// const iceCreamReducer=(state=iceCreamState,action)=>{
//     switch(action.type){
//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numOfCakes:state.numOfIceCreams-1
//             }
//         default:
//             return state
//     }
// }

// const rootReducer=combineReducer({
//     cake:cakeReducer,
//     iceCream:iceCreamReducer
// })

// const store=createStore(rootReducer,applyMiddleware(createLogger))

// console.log(store.getState())

// const unsubscribe=store.subscribe(()=>{
//     console.log(store.getState())
// })

// store.dispatch(buyCake())
// store.dispatch(buyIceCream())

// unsubscribe()

//async action

const state={
    load:true,
    users:[],
    err:''
}

const FETCH_USER="FETCH_USER"
const FETCH_LOAD="FETCH_LOAD"
const FETCH_ERROR="FETCH_ERROR"

function fetchUser(users){
    return {
        type:FETCH_USER,
        payload:users
    }
}

function fetchLoad(){
    return{
        type:FETCH_LOAD
    }
}

function fetchError(error){
    return{
        type:FETCH_ERROR,
        payload:error.message
    }
}

