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

// let todayDate = new Date();
// console.log(todayDate);

// //15 days 
// let fifteen=todayDate.setDate(todayDate.getDate()+15)
// console.log(todayDate)

// 1 2 4 7 11 16 

// function* series(){
//     let start=1
//     let result=1
//     while(true){
//         yield result
//         result += start
//         start++
//     }
// }

// let print=series(11)
// for(let i=1;i<=11;i++){
//     console.log(print.next().value)
// }

// function* evenNo(){
//     let even=2

//     while(true){
//         yield even
//         even+=2
//     }
// }

// let print=evenNo(11)
// while(true){
//     console.log(print.next().value)
// }

