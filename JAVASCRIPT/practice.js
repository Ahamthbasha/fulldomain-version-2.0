// //deepcopy

const { resolve } = require("path");
const { json } = require("stream/consumers");

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

// function sum(fn){
//     let a=10
//     let b=20
//     fn(a,b)
// }


// sum((a,b)=>{
//     console.log(a+b)
// })

// function getNo(fn){
//     let no=20
//     fn(20)
// }

// function square(no,fn){
//     let n=no*no
//     fn(n)
// }

// function mul(no,fn){
//     let mul=no*2
//     fn(mul)
// }

// getNo((no)=>{
//     console.log(no)
//     square(no,(result)=>{
//         console.log(result)
//     })
//     mul(no,(result)=>{
//         console.log(result)
//     })
// })

// function no(fn){
//     let no=10
//     fn(no)
// }

// no((error,result)=>{
//     if(error){
//         console.log(error)
//     }

//     if(result){
//         console.log(result)
//     }
// })


// function task1(fn){
//     let task1='task1 is completed'
//     console.log(task1)
//     fn(task1)
// }

// function task2(task1,fn){
//     let task2='task2 is completed'
//     console.log(task2)
//     fn(task2)
// }


// function task3(task2,fn){
//     let task3='task3 is completed'
//     console.log(task3)
//     fn(task2)
// }

// task1((task1)=>{
//     task2(task1,(task2)=>{
//         task3(task2,(task3)=>{
//             console.log("all tasks are completed")
//         })
//     })
// })

// let myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('promise1')
//     },2000)
// })
// .then((resolve)=>{
//     console.log(resolve)
// })

// .catch((reject)=>{
//     console.log(reject)
// })

// .finally(()=>{
//     console.log("Promise settled")
// })

// let promise=Promise.resolve("already done")

// promise.then((resolve)=>{
//     console.log(resolve)
// })

// let promise2=Promise.reject("hello")

// promise2.catch((reject)=>{
//     console.log(reject)
// })

// let promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('promise1')
//     },1000)
// })

// let promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('promise2')
//     },500)
// })

// let promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('promise3')
//     },250)
// })

// Promise.allSettled([promise1,promise2,promise3])
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })

// function add(no1,no2){
//     return new Promise((resolve,reject)=>{
//         resolve(no1+no2)
//     })
// }


// async function call(){
//     try {
//         const data=await add(5,5)
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// call()

// function sum(...num){
//     for(let i=0;i<num.length;i++){
//         console.log(num[i])
//     }
// }
// let no=[1,2,3,4,5]
// sum(no)


// let obj={
//     name:"basha",
//     age:20,
//     address:{
//         street:"center street",
//         village:"melsolankuppam"
//     }
// }
// console.log(obj)
// let obj1=structuredClone(obj)
// console.log(obj1)

// obj.address.street='basha street'

// obj1.address.street="naan dhan"

// console.log(obj)
// console.log(obj1)

// function DeepCopy(obj){
//     if(obj === null || typeof obj !== 'object' ){
//         return obj
//     }
    
//     const copy=Array.isArray(obj)?[] :{}


//     for(let key in obj){
//         copy[key] = DeepCopy(obj[key])    
//     }
    
//     return copy
// }

// let deep=DeepCopy(obj)

// console.log(obj)
// console.log(deep)

// obj.address.street='basha street'

// deep.address.street="naan dhan"

// console.log(obj)
// console.log(deep)


// function deepCopy(obj){
//     return JSON.parse(JSON.stringify(obj))
// }

// deepCopy(obj)

// function deepCopy(obj){
//     if(obj=== null ||typeof obj !== 'object'){
//         return obj
//     }

//     const copy = Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         copy[key] = deepCopy(obj[key])
//     }

//     return copy
// }

// console.log(deepCopy(obj))

// function deepFreeze(obj){
//     let propNames = Object.getOwnPropertyNames(obj)

//     for(let name of propNames){
//         const value = obj[name]

//         if(value && typeof value === 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

// console.log(deepFreeze(obj))


//deep copy

function deepCopy(obj){
    return JSON.parse(JSON.stringify(obj))
}

function deepCopy2(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj
    }

    const copy =Array.isArray(obj) ? [] :{}

    for(let key in obj){
        copy[key] = deepCopy2(obj[key])
    }

    return copy
}

function deepFreeze(obj){
    const propNames = Object.getOwnPropertyNames(obj)

    
    for(let name of propNames){
        const value =obj[name]

        if(value && typeof value === 'object'){
            deepFreeze(value)
        }
    }

    return Object.freeze(obj)
}

const factorial =(no) =>{
    let fact = 1
    for(let i=1;i<=no;i++){
        fact *= i
    }
    return fact
}

const memoize = (fn) => {
    let cache = {}

    return function (args){
        let no = args

        if(no in cache){
            return cache[no]
        }else{
            let result = fn(args)
            cache[no] = result
            return result
        }
    }
}