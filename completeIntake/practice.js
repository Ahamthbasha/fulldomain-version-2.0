// //method


// const operation = {
//     add:(x,y)=>{
//         return x+y
//     },

//     sub:function(a,b){
//         return a-b
//     }
// }

// console.log(operation.sub(10,-10))


// const val ={
//     value:10,

//     add:function(no){
//         this.value+=no
//     }
// }

// console.log(val.value)
// console.log(val.value)


// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


// let str = "hello world"

// let regex = /o/

// console.log(str.search(regex))

// console.log(str.match(regex))


// function greet(arg1,arg2){
//     console.log(`hello ${this.name}.Argument ${arg1},${arg2}`)
// }

// const obj = {
//     name:"basha"
// }

// // greet.call(obj,['hello','is','working'])


// // greet.apply(obj,['kingdom','is','building'])

// // let newFn = greet.bind(obj,'kingdom','constructing')

// // newFn()



// //generator function

// function *alternateEven(no){
//     while(no != 0){
//         let number = no - 2
//         yield number
//         no = no-2
//     }
// }

// const printAlternateEven = alternateEven(100)

// for(let i=1;i<=50;i++){
//     if(i%2 == 0){
//         console.log(printAlternateEven.next().value)
//     }else{
//         printAlternateEven.next()
//     }
// }


// function outer(){
//     let count = 0
//    function inner(){
//         count++
//         console.log(count)
//     }
//    return inner
// }

// let counter = outer()

// counter()
// counter()


//deep copy

// function deepCopy(obj){
//     if(obj == null || typeof obj != 'object'){
//         return obj
//     }

//     const copy = Array.isArray(obj) ? [] :{}

//     for(let key in obj){
//         copy[key] = deepCopy(obj[key])
//     }

//     return copy
// }


//accessors

// const user = {
//     firstName : 'ahamathbasha',
//     lastName: 'F',

//     get fullName(){
//         return `${this.firstName}.${this.lastName}`
//     },

//     set fullName(name){
//         let [firstName,lastName] = name.split('')
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }

// console.log(user.fullName)
// user.fullName = 'pradeep ranganathan'
// console.log(user.fullName)


// function calculator(){}

// calculator.prototype.add = function(a,b){
//     return a+b
// }

// function scientificCalculator(){
//     calculator.call(this)
// }

// scientificCalculator.prototype = Object.create(calculator.prototype)


// scientificCalculator.prototype.multiply = function(a,b){
//     return a * b
// }

// const operation = new scientificCalculator()

// console.log(operation.add(5,5))


// const obj  = {
//     displayName:function(){
//         console.log(this.name)
//     }
// }

// const obj2 = {
//     name:"basha",
//     __proto__ : obj
// }

// obj2.displayName()


//proxy object

// const obj = {
//     name :"ahamathbasha",
//     age : 30
// }


// const handler = {
//     get (target,prop){
//         return target[prop] || 'no key exist'
//     },
//     set(target,prop,value){
//         if(prop == 'name'){
//             target[prop] = value
//         }
//         else if(prop == 'age'){
//             if(value > 0){
//                 target[prop] = value
//             }
//         }
//     }
// }


// const proxy = new Proxy(obj,handler)

// console.log(proxy.name)

// proxy.name = 'metti oli'

// console.log(proxy.name)

// console.log(obj.name)


//memoization

// function factorial(n){
//     if(n == 1){
//         return 1
//     }

//     return n * factorial(n-1)
// }

// const memoization = (fn)=>{
//     let cache = {}
//     return function(args){
//         if(args in cache){
//             return cache[args]
//         }
//         else{
//             let result = fn(args)
//             cache[args] = result
//             return result
//         }
//     }
// }



// const calMemo = memoization(factorial)
// console.time()
// console.log(calMemo(5))
// console.timeEnd()

// console.time()
// console.log(calMemo(5))
// console.timeEnd()


//deep freeze

// function deepFreeze(obj){
//     let propNames = Object.getOwnPropertyNames(obj)

//     for(let key of propNames){
//         const value = obj[key]
//         if(value && typeof value == 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

// const article = [{id:1,name:'basha'}];
// const videos = [{id:10,name:'abcde',url:"http",articleId:1}];


// let final = []

// for(let key of article){
//     const relatedVideos = videos.filter((video)=>{
//         return video.articleId == key.id
//     })

//     final.push({
//         article:key,
//         videos:relatedVideos
//     })
// }

// console.log(final)



// function largest(arr){
//     let large = arr.reduce((acc,cur)=>{
//         if([acc.first,acc.second,acc.third,acc.fourth].includes(cur)){
//             return acc
//         }

//         if(cur > acc.first){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur > acc.second){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(cur > acc.third){
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(cur > acc.fourth){
//             acc.fourth = cur
//         }
//         return acc
//     },{
//         first:-Infinity,
//         second:-Infinity,
//         third:-Infinity,
//         fourth:-Infinity
//     })

//     return large
// }

// console.log(largest([10,9,10,7,8,2,3,100]))


// function smallest(arr){
//     let small = arr.reduce((acc,cur)=>{
//         if([acc.first,acc.second,acc.third,acc.fourth].includes(cur)){
//             return acc
//         }

//         if(cur < acc.first){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur < acc.second){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(cur < acc.third){
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(cur < acc.fourth){
//             acc.fourth = cur
//         }
//         return acc
//     },{
//         first:Infinity,
//         second:Infinity,
//         third:Infinity,
//         fourth:Infinity
//     })

//     return small
// }

// console.log(smallest([10,9,10,7,8,2,3,100,0,0,-1,-1,-100]))


// write a program to get the odd Number that appeared more than once

// let arr = [7,1,1,7,2,2,7]

// let odd = []

// for(let i=0;i<arr.length;i++){
//     let count = 0
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] == arr[j]){
//             count++
//         }
//     }


//     if((count >= 1) && (arr[i] % 2 != 0)){
//         let alreadyPresent = false

//         for(let k=0;k<odd.length;k++){
//             if(arr[i] == odd[k]){
//                 alreadyPresent = true
//             }
//         }

//         if(!alreadyPresent){
//             odd.push(arr[i])
//         }
//     }
// }

// console.log(odd)





// function deepCopy(obj){
//     if(obj == null || typeof obj != 'object'){
//         return obj
//     }

//     const copy = Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         copy[key] = deepCopy(obj[key])
//     }

//     return copy
// }


// function deepFreeze(obj){
//     let propNames = Object.getOwnPropertyNames(obj)

//     for(let key of propNames){
//         const value = obj[key]

//         if(value && typeof value === 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

// function factorial(no){
//     if(no == 1){
//         return no
//     }

//     return n * factorial(no - 1)
// }

// const memoization = (fn)=>{
//     let cache = {}
//     return function(args){
//         if(args in cache){
//             return cache[args]
//         }else{
//             let result = fn(args)
//             cache[args] = result
//             return result
//         }
//     }
// }


// function factory(name,age){
//     return {
//         name,
//         age,
//     }
// }

// const bashaObj = factory('basha',20)
// console.log(bashaObj)


// function largestWord(arr){
//     let large = arr.reduce((acc,cur)=>{
//         if([acc.first,acc.second,acc.third,acc.fourth].includes(cur)){
//             return acc
//         }

//         if(cur.length > acc.first.length){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur.length > acc.second.length){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(cur.length > acc.third.length){
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(cur.length > acc.fourth.length){
//             acc.fourth = cur
//         }
//         return acc
//     },
// {
//     first:"",
//     second:"",
//     third:'',
//     fourth:''
// })

// return large
// }

// console.log(largestWord(['i','love','india','is','my','country']))





// function smallestWord(arr){
//     let small = arr.reduce((acc,cur)=>{
//         if([acc.first.length,acc.second.length,acc.third.length,acc.fourth.length].includes(cur.length)){
//             return acc
//         }

//         if(cur.length < acc.first.length){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur.length < acc.second.length){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(cur.length < acc.third.length){
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(cur.length < acc.fourth.length){
//             acc.fourth = cur
//         }
//         return acc
//     },
// {
//     first:"a".repeat(1000),
//     second:"a".repeat(1000),
//     third:'a'.repeat(1000),
//     fourth:'a'.repeat(1000)
// })

// return small
// }
// console.log(smallestWord(['i','love','india','is','my','country']))

