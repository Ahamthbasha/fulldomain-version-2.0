// //deepcopy

// function deepCopy(obj){
//     if(obj == null || typeof obj != 'object'){
//         return obj
//     }

//     let copy=Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         copy[key]=deepCopy(obj[key])
//     }

//     return copy
// }

// //deep Freeze

// function deepFreeze(obj){
//     const propNames=Object.getOwnPropertyNames(obj)

//     for(let val of propNames){
//         const value=propNames[val]

//         if(value && typeof value === 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

// //memoization

// function sum(n){
//     let sum=0
//     for(let i=1;i<=n;i++){
//         sum+=i
//     }
//     return sum
// }

// const memoization=(fn)=>{
//     return function(args){
//         let cache={}
//         let no=args[0]
//         if(no in cache){
//             return cache[no]
//         }else{
//             let result=fn(args)
//             cache[no]=result
//             return result
//         }
//     }
// }

// let eff=memoization(sum)

// console.time()
// console.log(eff(10))
// console.timeEnd()

// console.time()
// console.log(eff(10))
// console.timeEnd()