// function greet(message1,message2){
//     return `${this.name} ${message1} and ${message2}`
// }

// const obj={
//     name:'ahamathbasha'
// }

// // const result = greet.apply(obj,["good morning","hope the best"])

// const result = greet.bind(obj)

// console.log(result('good morning','hope the best'))

// function* generateNo(){
//     let i=100

//     while(i>0){
//         yield i

//         i=i-2
//     }
// }

// let even = generateNo()

// for(let i=1;i<=50;i++){
//     if(i%2 == 1){
//         console.log(even.next().value)
//     }else{
//         even.next()
//     }
// }

// function currying(n1){
//     return function(n2){
//         return function(n3){
//             return n1+n2+n3
//         }
//     }
// }

// console.log(currying(1)(2)(3))

// function obj(name,location,price){
//     return {
//         name:name,
//         location:location,
//         price:price
//     }
// }

// let object = obj("ahamathbasha","msk",200)

// console.log(object)


// const person = {
//     name:"ahamathbasha",
    

//     get fullName(){
//         return `${this.name}`
//     },

//     set fullName(name){
//         this.name = name
//     }
// }

// console.log(person.fullName)

// person.name = 'basha'

// console.log(person.fullName)


// const obj={
//     name:"ahamathbasha",
//     age:20
// }

// const handler={
//     set(target,key,value){
//         target[key] = value
//     },

//     get(target,key){
//         return target[key] || null
//     }
// }

// const proxy = new Proxy(obj,handler)

// proxy.name ="manick basha"

// console.log(proxy.name)

// console.log(obj)


// function deepCopy(obj){
//     if(obj === null || typeof obj != 'object'){
//         return obj
//     }

//     const copy = Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         copy[key] = deepCopy(obj[key])
//     }

// }

// function deepFreeze(obj){
//     let propNames = Object.getOwnPropertyNames(obj)

//     for(let name of propNames){
//         let value = obj[name]

//         if(value && typeof value === 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

// function factorial(no){
//     let fact = 1
//     for(let i=1;i<=no;i++){
//         fact*=i
//     }
//     return fact
// }

// const memoization =(fn) =>{
//     let cache ={}

//     return function(args){
//         let no = args

//         if(no in cache){
//             return cache[no]
//         }
//         else{
//             let result = fn(args)
//             cache[no] = result
//             return result
//         }
//     }
// }

// const memoFactorial = memoization(factorial)

// console.log(memoFactorial(5))


// const ab =[[1],[23],[32],[76]]

// let output =[]


// for(let val of ab){
//     for(let value of val){
//         output.push({a:value})
//     }
// }

// console.log(output)

// let input =[4,5,2,25]
// let output = []

// for(let i=0;i<input.length;i++){
//     let nextGreater = -1
//     for(let j=i+1;j<input.length;j++){
//         if(input[j] > input[i]){
//             nextGreater = input[j]
//             break
//         }
//     }
//     output.push(nextGreater)
// }

// console.log(output)

