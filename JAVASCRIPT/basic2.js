// const calculator = {
//     add(x,y){
//         return x+y
//     },
//     sub(x,y){
//         return x+y
//     }
// }

// console.log(calculator.add(10,10))

// const object1 ={
//     name:"paarivelKarnan",
//     greet(){
//         return `hello ${this.name}`
//     }
// }

// console.log(object1.greet())

// const chain = {
//     value : 1,

//     increment(x){
//         return this.value+=x
//     }
// }

// console.log(chain.increment(10))

// console.log(chain.value)

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// const email = 'ahamathbasha@gmail.com'

// console.log(emailRegex.test(email))


// const id = Symbol('id')

// const personDetails = {
//     [id] : '12343413242',
//     name: 'paari'
// }

// console.log(personDetails[id])

// const arr = [1,2,3,4,5,6,7]

// arr.copyWithin(1,3,5)

// console.log(arr)


// const obj={
//     firstName : 'paarivelkannan',
//     lastName : "jadamuni",

//     get fullname(){
//         return this.firstName + this.lastName
//     },

//     set name(name){
//         this.firstName = name
//     }
// }

// console.log(obj.fullname)
// obj.name = 'maaveran'
// console.log(obj.fullname)

// function calculator(){}

// calculator.prototype.add = function(a,b){
//     return a+b
// }

// const addition = new calculator()

// console.log(addition.add(10,10))

// function calculator(){}

// calculator.prototype.add = (a,b)=>{
//     return a+b
// }


// function scientificCalculator(){
//     calculator.call(this)
// }

// scientificCalculator.prototype=Object.create(calculator.prototype)

// scientificCalculator.prototype.constructor = scientificCalculator

// scientificCalculator.prototype.sub=(a,b)=>{
//     return a-b
// }

// const calculation = new scientificCalculator()

// console.log(calculation.add(10,10))
// console.log(calculation.sub(20,10))


// const movie ={
//     name:"Retro",
//     starring:'suriya',
//     description:'purpose',
//     tag:'love laughter war'
// }

// const handler = {
//     get(target,prop){
//         return target[prop]
//     },

//     set(target,prop,value){
//         target[prop] = value
//     }
// }

// const proxy = new Proxy(movie,handler)

// console.log(proxy.name)

// proxy.tag = 'the one'

// console.log(proxy.tag)

// console.log(movie)


// const swim={
//     canSwim(){
//         return `you can do it`
//     }
// }

// class Animal{
//     constructor(name){
//         this.name = name
//     }
// }

// class Shark extends Animal{}

// Object.assign(Shark.prototype,swim)

// const shark = new Shark("shar")
// console.log(shark.canSwim())


// let str="ABC NEE VAASI ELLAM UN KAI RAASI SO EASY"
// str=str.replaceAll(" ","_")
// console.log(str)

// let obj = [{a:[10,20,30]},{b:[40,50]},50,{d:70}]

// let sum = 0

// let newArr = []
// for(let val of obj){
//     if(typeof val == 'number'){
//         sum += val
//     }
//     newArr.push(Object.values(val).flat(2))
// }

// newArr = newArr.flat(1)
// sum += newArr.reduce((acc,cur)=>{
//     return acc+cur
// })

// console.log(sum)

// function deepCopy(obj){
//     if(obj === null || typeof obj != 'object'){
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

//     for(let name of propNames){
//         const value = obj[name]

//         if(value && typeof value == 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

// function factorial(n){
//     let fact = 1

//     for(let i=1;i<=n;i++){
//         fact *= i
//     }

//     return fact
// }

// const memoization = (fn) => {
//     const cache = {}

//     return function(arg){
//         if(arg in cache){
//             return cache[arg]
//         }else{
//             let result =fn(arg)
//             cache[arg]=result
//             return result
//         }
//     }
// }