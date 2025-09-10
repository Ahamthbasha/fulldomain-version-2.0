// const calculation = {
//     add:(x,y)=>{
//         return x+y
//     }
// }

// console.log(calculation.add(5,5))

// const person = {
//     name:'madharaasi',
//     greet:function greeting(){
//         return `${this.name}`
//     }
// }

// console.log(person.greet())

// const valueOnThis = {
//     value : 0,
//     add:function(x){
//         return this.value += x
//     },
//     mul: function(x){
//         return this.value *= x
//     }
// }


// console.log(valueOnThis.add(50))
// console.log(valueOnThis.value)

// const numObj = new Number(123)
// console.log(numObj.valueOf())

// const date = new Date()

// const year = date.getFullYear()
// console.log(year)

// let arr = [1,2,3,4,5]

// let result = arr.map((n)=>{
//     return n * n
// })

// let result2 = arr.filter((n)=>{
//     return n % 2 != 0
// })

// let result3 = arr.reduceRight((acc,cur)=>{
//     return acc + cur
// })

// console.log(result,result2,result3)

// arr.forEach((n,i)=>{
//     arr[i] = n * n
// })
// console.log(arr)

// let result = arr.find((n)=>{
//     return n > 3
// })

// let result2 = arr.findIndex((n)=>{
//     return n > 4
// })

// let result3 = arr.findLast((n)=>{
//     return n > 1
// })

// console.log(result,result2,result3)


// let day = 4

// switch(day){
//     case 1:
//         console.log('sunday')
//         break;
//     case 2:
//         console.log('monday')
//         break;
//     case 3:
//         console.log("tuesday")
//         break;
//     case 4:
//         console.log('wednesday')
//         break
//     default:
//         console.log('all day i have what day you want')
//         return
// }


// let count = 0

// function impureFunction(){
//     count++
//     return count
// }

// console.log(impureFunction())

// function impure(a,b){
//     console.log(a+b)
//     return a+b
// }

// console.log(impure(1,2))


// function factorial(n){
//     if(n <= 1){
//         return n
//     }

//     return n * factorial(n-1)
// }

// console.log(factorial(5))


// setTimeout(()=>{
//     console.log('i am executing')
// },1000)


// function greet(){
//     console.log(this.name)
// }

// const person = {
//     name:"basha"
// }

// greet.call(person)


// function greet(msg1,msg2){
//     console.log(` my name is ${this.name }.${msg1} is delivered. ${msg2} is delievered`)
// }

// const person2 ={
//     name:"basha"
// }

// greet.apply(person2,['good','bye'])


// function greeting(msg){
//     console.log(`${this.name}.Hello ${msg}`)
// }

// const person = {
//     name:"madharaasi"
// }

// let newFn = greeting.bind(person)

// newFn("blast")


// function *GeneratorFn(){
//     let no = 100

//     while(no){
//         yield no
//         no -= 2
//     }
// }

// const alternateEven = GeneratorFn()

// for(let i=1;i<=50;i++){
//     if(i % 2 != 0){
//         alternateEven.next()
//     }else{
//         console.log(alternateEven.next().value)
//     }
// }

//closure


// function count(){
//     let count = 0

//     return function(){
//         count++

//         return count
//     }
// }

// const counter = count()

// console.log(counter())


// function getData(fn){
//     setTimeout(()=>{
//         const data = {id:10}
//         fn(data)
//     },1000)
// }


// getData((data)=>{
//     console.log(data)
// })


//callback hell


// function getData(fn){
//     setTimeout(()=>{
//         let no = 10
//         fn(no)
//     },1000)
// }

// function addNo(no,fn){
//     setTimeout(()=>{
//         let sum = no + no
//         fn(sum)
//     })
// }

// function result(){
//     setTimeout(()=>{
//         console.log('ended')
//     },1000)
// }


// getData((no)=>{
//     console.log(no)
//     addNo(no,(sum)=>{
//         console.log(sum)
//         result()
//     })
// })


// function data(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let data = "basha is the king of the world"
//             if(data){
//                 resolve(data)
//             }
//         },1000)
//     })
// }

// async function getData(){
//     try {
//         const result = await data()
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getData()


// function deepCopy(obj){
//     if(obj == null || typeof obj != "object"){
//         return obj
//     }

//     let copy = Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         copy[key] = deepCopy(obj[key]) 
//     }

//     return copy
// }

// class Animal{
//     constructor(name){
//         this.name = name
//     }

//     speak(){
//         console.log(' yes dude')
//     }
// }


// const animal = {
//     name:'dog'
// }

// const dog = Object.create(animal)


// const object = {
//     firstName:'Ahamathbasha',

//     get fullName(){
//         return this.firstName
//     },

//     set fullName(name){
//         this.firstName = name
//     }
// }

// console.log(object.fullName)

// object.fullName = "Manickam"

// console.log(object.fullName)

// function calculator(){}

// calculator.prototype.add = function(a,b){
//     return a+b
// }

// const callAdd = new calculator()

// console.log(callAdd.add(5,5))


// function Calculator(){

// }

// Calculator.prototype.add = function(a,b){
//     return a+b
// }

// function ScientificCalculator(){}

// ScientificCalculator.prototype = Object.create(Calculator.prototype)

// ScientificCalculator.prototype.multiply = function(a,b){
//     return a * b
// }

// const calci = new ScientificCalculator()
// console.log(calci.multiply(4,4))
// console.log(calci.add(4,4))

// const obj = {
//     name:"basha",
//     getRole:function(){
//         return this.role
//     },
//     getName:function(){
//         return this.name
//     }
// }


// const obj2 ={ 
//     name:"zhzb",
//     role:1,
//     __proto__:obj
// }

// console.log(obj2.getRole())

// const obj3 = {
//     name:"srk",
//     __proto__:obj2
// }

// console.log(obj3.getRole())
// console.log(obj3.getName())


//proxy object

// const obj = {
//     name:"ahamathbasha",
//     age:20
// }

// const handler = {
//     get(target,prop){
//         return prop in target ? target[prop] : 'property does not exist'
//     },
//     set(target,prop,value){
//         if(prop == 'age'){
//             target[prop] = value
//         }

//         if(prop == "name"){
//             target[prop] = value
//         }
//     }
// }

// const basicObj = new Proxy(obj,handler)

// basicObj.age = 30
// console.log(basicObj.name)
// console.log(basicObj)
// console.log(obj)

// class BankAccount{
//     constructor(){
//         let _amount = 0

//         this.deposit = function(credit){
//             _amount+=credit
//         }

//         this.debit = function(debt){
//             if(_amount >= 0){
//                 _amount-= debt
//             }else{
//                 return 'balance is zero'
//             }
//         }

//         this.getAmount = function(){
//             return _amount
//         }
//     }
// }

// const acc = new BankAccount()

// acc.deposit(10)

// console.log(acc.getAmount())

// function deepCopy(obj){
//     if(obj === null && typeof obj !== 'object'){
//         return obj
//     }

//     const copy = Array.isArray(obj)?[]:{}

//     for(let key in obj){
//         copy[key] = deepCopy(obj[key])
//     }

//     return copy
// }

// function factorial(n){
//     let fact = 1

//     for(let i=1;i<=n;i++){
//         fact *= i
//     }

//     return fact
// }


// const memoization = (fn)=>{
//     let cache = {}
//     return function(args){
//         let input = args

//         if(input in cache){
//             return cache[input]
//         }else{
//             let result = fn(input)
//             cache[input] = result
//             return result
//         }
//     }
// }


// const effi = memoization(factorial)

// console.log(effi(5))


// const obj = {
//     name : "ahamathbasha",
//     address:{
//         street:"no street"
//     }
// }

// console.log(obj.address.city)
// console.log(obj.address?.city)
// console.log(obj.city?.street)

// console.log(obj.city.street)


// function deepFreeze(obj){
//     let propNames = Object.getOwnPropertyNames(obj)

//     for(let val of propNames){
//         const value = obj[val]

//         if(value && typeof value === 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }


// function deepCopy(obj){
//     if(obj === null && typeof obj != 'object'){
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

//     for(let val of propNames){
//         const value = obj[val]

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
//     let cache = {}

//     return function(args){
//         let input = args

//         if(input in cache){
//             return cache[input]
//         }else{
//             let result = fn(input)
//             cache[input] = result
//             return result
//         }
//     }
// }


// const object = {
//     name:'ahamathbasha',
//     age:"30"
// }


// const handler = {
//     get(target,prop){
//         return prop in target ? target[prop] : 'prop is not found'
//     },

//     set(target,prop,value){
//         if(prop == 'name'){
//             target[prop] = value
//         }

//         if(prop == 'age'){
//             target[prop] = value
//         }
//     }
// }


// const proxy = new Proxy(object,handler)

// console.log(proxy.name)

// proxy.name = "madharaasi"

// console.log(proxy)

// console.log(object)



// function largest(arr){
//     let result = arr.reduce((acc,cur)=>{
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
// first:-Infinity,
// second:-Infinity,
// third:-Infinity,
// fourth:-Infinity
//     })

//     return result
// }


// console.log(largest([10,1,2,,19,20,19,20,1000]))

// function smallest(arr){
//     let result = arr.reduce((acc,cur)=>{
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

//     return result
// }

// console.log(smallest([10,2,1,1,2,10,19,20,19,20,1000]))



// function largestString(str){
//     let input = str.split(' ')

//     let result = input.reduce((acc,cur)=>{
//         if([acc.first,acc.second,acc.third,acc.fourth].includes(cur)){
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
//     },{
//         first : "~".repeat(1000),
//         second : "~".repeat(1000),
//         third : "~".repeat(1000),
//         fourth : "~".repeat(1000),
//     })
//     return result
// }


// console.log(largestString('hi how are you what about the day'))


// const array = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]]
// function flatArr(arr){
//     let result = []

//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             let innerArr = flatArr(arr[i])
//             for(let j=0;j<innerArr.length;j++){
//                 result[i+j] = innerArr[j]
//             }
//         }else{
//             result[i] = arr[i]
//         }
//     }

//     return result
// }

// console.log(flatArr(array))


// const str = 'my name is basha'

// let result = str.split(' ').map((word)=>{
//     return word[0].toUpperCase() + word.slice(1)
// }).join(" ")

// console.log(result)

// let result = str.split(' ').map((word)=>{
//     return word.slice(0,word.length-1) + word[word.length-1].toUpperCase()
// }).join(" ")

// console.log(result)



// let obj = {
//   a: {
//     b: {
//       c: 1
//     }
//   },
//   d: 2
// }

// function flatObj(obj,parentKey="",result={}){
//     for(let key in obj){
//         let fullPath = parentKey ? `${parentKey}.${key}` : key

//         if(typeof obj[key] === 'object'){
//             flatObj(obj[key],fullPath,result)
//         }else{
//             result[fullPath] = obj[key]
//         }
//     }

//     return result
// }

// console.log(flatObj(obj))


// Input:
// let obj ={
//   "a.b.c": 1,
//   "d": 2
// }

// let result = {}

// for(let key in obj){
//     let part = key.split('.')
//     let current = result

//     for(let i=0;i<part.length;i++){
//         if(i === part.length-1){
//             current[part[i]] = obj[key]
//         }else{
//             if(!current[part[i]]){
//                 current[part[i]] = {}
//             }
//             current = current[part[i]]
//         }
//     }
// }

// console.log(result)

// const orders = [
//   { id: 1, customer: "Alice", items: ["apple", "banana"] },
//   { id: 2, customer: "Bob", items: ["banana", "orange"] },
//   { id: 3, customer: "Alice", items: ["orange"] },
//   { id: 4, customer: "Charlie", items: ["apple", "apple","banana"]}
// ];


// let takeFreq = new Map()

// for(let val of orders){
//     if(!takeFreq.has(val.customer)){
//         takeFreq.set(val.customer,new Set(val.items))
//     }else{
//         const takeItems = takeFreq.get(val.customer)
//         val.items.forEach((val)=>{
//             takeItems.add(val)
//         })
//     }
// }

// console.log(takeFreq)

// let finalArr = []

// for(let [customer,items] of takeFreq){
//     finalArr.push({
//         customer,
//         items:[...items]
//     })
// }

// console.log(finalArr)


function createObject(name,age){
    return {
        name:name,
        age:age
    }
}

console.log(createObject('ahamathbasha',20))