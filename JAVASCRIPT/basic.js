// // object destructuring

const { networkInterfaces } = require("node:os")
const { cursorTo } = require("node:readline")

// const person={
//     name:"vishnu G.R",
//     role:"reviewer",
//     anotherFace:"periya developer",
//     profile:{
//         name:"Manager",
//         age:30
//     }
// }


// const {name:FullName,role,anotherFace,native="kochin",profile:{name,age}} = person

// console.log(FullName)
// console.log(native)
// console.log(name)

//type conversion

// let a=1
// let b=String(a)
// console.log(a)
// console.log(b)

//tdz temporal dead zone

// function example(){
//     //console.log(a)//reference error
//     let a=10
//     console.log(a)
// }

// example()

// var a=10
// var a=20

// function global(){
//     console.log(a)
//     var a=10
//     console.log(a)
// }

// global()

// let b=10

// function block1(){
//     // console.log(a)
//     let a
//     console.log(a)
// }

// block1()

// function block2(){
//     const a =10
//     console.log(a)
// }

// block2()

// let b = null
// console.log(b)

// const calculation={
//     add:(x,y)=>{
//         return x+y
//     }
// }

// const details={
//     name:"ahamathbasha",
//     greet(){
//         return this.name
//     }
// }

// console.log(details.greet())


// const chain={
//     value:0,
//     add(x){
//         this.value+=x
//         return this.value
//     },
//     mul(x){
//         this.value*=x
//         return this.value
//     }
// }

// console.log(chain.add(5))

//email regex

// let regEx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// let email="ahamathbasha@gmail.com"

// console.log(regEx.test(email))

// let str="cat and cat"

// let regex=/cat/g

// console.log(str.match(regex))

// let abcd=/[0-9]/

// console.log(abcd.test("ahamathbasha no 1"))

// let animal=/(cat|dog)/

// console.log(animal.test("iron"))

// let name="ahamathbasha"
// console.log(name.length)

// console.log(name[0])
// console.log(name.at(0))
// console.log(name.charAt(1))
// console.log(name.charCodeAt(1))
// console.log(name.slice(0,3))
// console.log(name.slice(-7,-1))
// console.log(name.substring(0,1))
// console.log(name.substr(0,5))
// console.log(name.toLowerCase())
// console.log(name.toUpperCase())
// console.log(name.trim())
// console.log(name.trimStart())
// console.log(name.trimEnd())

// console.log(name.padStart(13,'1'))
// console.log(name.padEnd(13,'1'))

// console.log(name.repeat(3))

// const str="coffee with cooldrinks"
// console.log(str.replace("coffee","soda"))
// console.log(str)

// const str2="coffee with cooldrinks or coffee with soda"
// console.log(str2.replaceAll("coffee","soda"))
// console.log(str2.split(" "))
// let str3=["abcd","good"]
// console.log(str3.join(' '))
// const str4="coffee"
// console.log(str2.concat(str4))

// const regEx=/world/

// console.log(regEx.exec("Hello world"))

// const name="ahamathbasha king"
// console.log(name.indexOf('a'))
// console.log(name.lastIndexOf('a'))
// console.log(name.search(/a/))

// console.log(name.includes("king"))
// console.log(name.startsWith("ahamathbasha"))
// console.log(name.endsWith("king"))

// const hex=0x1A
// console.log(hex)

// const no=123492374972394823776746823354765237
// console.log(BigInt(no))

// const no=1234.56572
// console.log(no.toExponential(2))
// console.log(no.toPrecision(5))
// console.log(no.toFixed(2))

// const now=new Date()
// console.log(now.getTime().toLocaleString())
// console.log(now.toLocaleString())

// const no=2
// console.log(Math.pow(no,2))

// let mathOperation={
//     name:"ahamathbasha",
//     greet(){
//         return this.name
//     },
//     add:(x,y)=>{
//         return x+y
//     }
// }

// console.log(mathOperation.add(5,5))
// console.log(mathOperation.greet())

// let person = {
//     name: "Ahamath",
//     greet: function () {
//         return this.name; // hardcoded object name
//     }
// };

// console.log(person.greet()); // Works

// let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// console.log(emailRegex.test("ahamathbasha@gmail.com"))

// let word=/\bking\b/

// console.log(word.test("kingkhan"))

// let name="ahamathbasha"
// console.log(name.padStart(20,"king"))
// console.log(name.padEnd(20,"king"))

// const data=new Date()
// console.log(data)

// console.log(data.getDate().toLocaleString())

// const value=Math.floor(Math.random()*10)
// console.log(value)

// const myName=Symbol('myName')

// const obj={
//     [myName]:"ahamathbasha"
// }

// console.log(obj)

// console.log(obj[myName])

// let arr=[1,2,3,4,5]
// arr.copyWithin(0,3)
// console.log(arr)

// arr.copyWithin(0,3,4)
// console.log(arr)

// const arr2=[1,2,[3,5[6,7,[8,9]]]]

// console.log(arr2.flat())

// arr.splice(0,1,10)
// console.log(arr)

// const arr=[1,2,3,4,5]

// const findFirstElement=arr.find((n)=>{
//     return n > 2
// })

// const findLastElement=arr.findLast((n)=>{
//     return n > 2 
// })

// const findIndex=arr.findIndex((n)=>{
//     return n > 2
// })

// console.log(findFirstElement)
// console.log(findLastElement)
// console.log(findIndex)

// const arr=[1,2,3,4,5]

// arr.forEach((n,i)=>{
//     arr[i]=n*n
// })
// console.log(arr)

// const arr=[1,2,3,4,5]

// const square=arr.map((n)=>(n*n))
// console.log(square)

// const filter=arr.filter((n)=>(n%2==0))
// console.log(filter)

// const reducer=arr.reduce((acc,curr)=>(acc+curr))
// console.log(reducer)

// const hasEven=arr.some((n)=>(n%2==0))
// console.log(hasEven)

// const allEven=arr.every((n)=>(n%2==0))
// console.log(allEven)


// function factorial(n){
//     if(n <=1 ){
//         return n
//     }

//     return n*factorial(n-1)
// }

// console.log(factorial(5))

// function one(fn,n){
//     return fn(n)
// }

// function square(x){
//     return x*x
// }

// console.log(one(square,2))

// let square=((n)=>(n*n))
// console.log(square(5))

// (function(){
// console.log("basha")
// })();


// setTimeout(()=>{
//     console.log("basha")
// },1000)


// let stop=setInterval(()=>{
//     console.log("hi")
// },1000)


// setTimeout(()=>{
//     clearInterval(stop)
// },4000)

// function greeting(){
//     return this.name
// }

// const user={
//     name:"basha"
// }

// console.log(greeting.call(user))

// function greeting2(best){
//     return `hi my name ${this.name} i am the ${best}` 
// }

// const user2={
//      name:"ahamathbasha"
// }

// console.log(greeting2.apply(user2,['best']))

// function binding(){
//     return this.name
// }

// let newBind=binding.bind(user2)
// console.log(newBind())

// const target={}
// const source={a:1,b:2}

// Object.assign(target,source)

// console.log(target)

// function* abcd(){
//     yield 1;
//     yield 2;
//     yield 3
// }

// let abcd2=abcd()

// console.log(abcd2.next().value)
// console.log(abcd2.next().value)
// console.log(abcd2.next().value)

// function* count(){
//     let count=1

//     while (count<=5){
//         yield count

//         count++
//     }
// }


// let counter=count()

// for(let i=1;i<=5;i++){
//     console.log(counter.next().value)
// }


// function* count(){
//     let count=1

//     while(count){
//         yield count

//         count++
//     }
// }

// let counter=count()

// for(let i=1;i<=5;i++){
//     console.log(counter.next().value)
// }

// console.log(counter.next().value)

// function multiply(a){
//     return function (b){
//         return a+b
//     }
// }

// const multi=multiply(2)
// console.log(multi(5))

// const add=a=>b=>a+b
// const add5=add(5)
// console.log(add5(10))


// function mul(a){
//     return function(b){
//         return function(c){
//             return a*b*c
//         }
//     }
// }

// const multiply=mul(1)(2)(3)
// console.log(multiply)


// function fetchData(callback){
//     setTimeout(()=>{
//         let user={name:"Ahamathbasha"}
//         callback(user)
//     },2000)
// }

// fetchData((user)=>{
//     console.log(user)
// })

// function sum(fn){
//     setTimeout(()=>{
//         let a=5
//         let b=5

//     return fn(a,b)
//     },1000)
// }

// function add(a,b){
//     let sum=a+b
//     return sum
// }

// console.log(sum(add))

// function fetchNo(callback){
//     setTimeout(()=>{
//         let no=5
//         callback(no)
//     },1000)
// }

// function add(no,callback){
//     setTimeout(()=>{
//         let add=no+no
//         callback(add)
//     },1000)
// }


// function sub(no,callback){
//     setTimeout(()=>{
//         let sub=no-1
//         callback(sub)
//     })
// }
// fetchNo((no)=>{
//     console.log("fetched no is",no)
//     add(no,(add)=>{
//         console.log("addition no is",add)
//         sub(10,(sub)=>{
//             console.log("subtraction no is",sub)
//         })
//     })
// })

// function doSomethingAsync(callback){
//     let result="success"
//     let error=null
//     callback(error,result)
// }

// doSomethingAsync((error,result)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(result)
//     }
// })


// function task1(callback){
//     let task1="task1 is completed"
//     callback(task1)
// }

// function task2(callback){
//     let task2="task2 is completed"
//     callback(task2)
// }

// function task3(callback){
//     let task3="task3 is completed"
//     callback(task3)
// }

// task1((task1)=>{
//     console.log(task1)
//     task2((task2)=>{
//         console.log(task2)
//         task3((task3)=>{
//             console.log(task3)
//             console.log("all task are completed")
//         })
//     })
// })


// function outerFunction(){
//     let outer="abcd"
//     function inner(){
//         console.log(outer)
//     }
//     inner()
// }

// outerFunction()


// let promise1=new Promise((resolve,reject)=>{
//     let a=10

//     if(a){
//         resolve(a)
//     }else{
//         reject("no value")
//     }
// })

// promise1

// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })
// .finally(()=>{
//     console.log("code executed")
// })

// let obj={
//     name:"abcd",
//     address:{
//         street:"main street"
//     }
// }

// let obj2={...obj}
// console.log(obj2)
// obj2.address.street="nadu street"
// console.log("obj2",obj2)
// console.log("obj1",obj)

// let obj3=JSON.parse(JSON.stringify(obj))
// console.log(obj3)

// obj3.address.street="nadu street"

// console.log("obj1",obj)
// console.log("obj3",obj3)

// function deepCopy(obj){
//     if(obj === null || typeof obj !== 'object'){
//         return obj
//     }

//     const copy=Array.isArray(obj)?[]:{}

//     for(let key in obj){
//         copy[key]=deepCopy(obj[key])
//     }

//     return copy
// }


// let no={
//     a:10,
//     b:{c:22},
//     d:[1,2,3,4]
// }

// let DeepCopy=deepCopy(no)
// console.log(DeepCopy)

// DeepCopy.b.c=30

// console.log(no)
// console.log(DeepCopy)


// const object={
//     a:1,
//     b:[1,2,3],
//     c:{d:4},
//     e:new Date(),
//     f:new Map([["key","value"]])
// }


// const newObject=structuredClone(object)
// console.log(newObject)

// const mySet=new Set()

// mySet.add(1)
// mySet.add(2)

// console.log(mySet.delete(3))

// console.log(mySet.has(4))
// console.log(mySet)
// console.log(mySet.clear())
// console.log(mySet.size)

// let map=new Map()
// map.set('name','ahamathbasha')
// map.set('age',21)


// console.log(map.get('age'))

// console.log(map.has("abcd"))

// console.log(map.size)

// map.clear()
// console.log(map)

// class animal{
//     constructor(name){
//         this.name=name
//     }

//     greet(){
//         return `hi ${this.name}`
//     }
// }


// class Dinosaur extends animal{
//     constructor(name,ancientName){
//         super(name)
//         this.ancientName=ancientName
//     }
// }

// let dog=new Dinosaur('puppy','godzilla')

// console.log(dog.greet())

// function car(brand){
//     this.brand=brand
// }

// const myCar=new car("rolls royce")
// console.log(myCar.brand)

// const person={}

// // Object.defineProperty(person,'name',{
// //     value:"ahamathbasha",
// //     writable:false
// // })


// const obj={
//     name:"ahamathbasha",
//     age:23
// }

// const descriptor=Object.getOwnPropertyDescriptor(obj,'name')
// console.log(descriptor)

// Object.defineProperty(obj,'name',{
//     value:"ahamathbasha",
//     writable:false,
//     enumerable:false,
//     configurable:true
// })

// const descriptor2=Object.getOwnPropertyDescriptor(obj,'name')
// console.log(descriptor2)

// const user={
//     firstName:"ahamathbasha.F",
//     lastName:"king",

//     get FullName(){
//         return `${this.firstName} ${this.lastName}`
//     },

//     set FullName(name){
//         let [firstName,lastName] = name.split(' ')
//         this.firstName=firstName,
//         this.lastName=lastName
//     }
// }


// console.log(user.FullName)

// user.FullName="ahamathbasha kingOfMSK"

// console.log(user.FullName)


// class animal{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }

//     greet(){
//         console.log("hello world")
//     }
// }


// let puppy=new animal('puppy')

// puppy.greet()

// class mathUtils{
//     static add(a,b){
//         return a+b
//     }
// }

// const addition=mathUtils.add(5,5)
// console.log(addition)

// function calculator(){}

//     calculator.prototype.add=function(a,b){
//         return a+b
//     }

//     calculator.prototype.sub=function(a,b){
//         return a-b
//     }


// //constructor

// function scientificCalculator(){
//     calculator.call(this)
// }

// scientificCalculator.prototype=Object.create(calculator.prototype)

// scientificCalculator.prototype.mul=function(a,b){
//     return a*b
// }

// scientificCalculator.prototype.div=function(a,b){
//     return a/b
// }
// let sum= new scientificCalculator()
// console.log(sum.mul(10,10))
// console.log(sum.add(5,5))

// function calculator(){}

// calculator.prototype.add=function(a,b){
//     return a+b
// }

// calculator.prototype.sub=function(a,b){
//     return a-b
// }

// function scientificCalculator(){
//     calculator.call()
// }

// scientificCalculator.prototype=Object.create(calculator.prototype)

// scientificCalculator.prototype.mul=function(a,b){
//     return a*b
// }

// let mathOperation=new scientificCalculator()

// console.log(mathOperation.add(5,5))
// console.log(mathOperation.mul(5,5))

// const Animal={
//     sound:"generic sound",
//     makeSound:function (){
//         return this.sound
//     }
// }

// const Dog={
//     sound:'bow',
//     __proto__:Animal,
//     running:"fast"
// }

// const cat={
//     sound:'meow',
//     __proto__:Dog
// }



// console.log(cat.makeSound())
// console.log(cat.running)

// const user={
//     name:"ahamath",
//     age:30

// }


// console.log('name' in user)
// const handler={
//     get (target,props){
//         console.log(props)
//         return props in target ? target[props] : "props will be here"
//     },

//     set (target,props,value){
//         if(props == 'age'){
//             target[props]=value
//         }
//     }
// }


// const proxyObject=new Proxy(user,handler)
// proxyObject.age=20
// console.log(user)
// console.log(proxyObject)

// const user={
//     name:"ahamathbasha",
//     age:20
// }

// const handler={
//     get(target,props){
//         return props in target ? target[props] : "no property"
//     },
//     set(target,props,value){
//         if(props=='age'){
//             target[props] = value
//         }
//     }
// }

// const proxyObject=new Proxy(user,handler)

// console.log(proxyObject.name)

// proxyObject.age=30

// console.log(proxyObject)
// console.log(user)

// class BankAccount{
//     constructor(Balance){
//         let balance=Balance

//         this.deposit=function(amount){
//             balance+=amount
//         }

//         this.withdraw=function(amount){
//             if(balance === 0 || balance < 0 ){
//                 return 'zero balance'
//             }
//             balance-=amount
//         }

//         this.getBalance=function(){
//             return balance
//         }
//     }
// }

// const ibank=new BankAccount(500)
// ibank.deposit(50)
// console.log(ibank.getBalance())


// function deepCopy(obj){
//     if(obj == null || typeof obj !== 'object'){
//         return obj
//     }

//     let copy= Array.isArray(obj)? [] :{}
//     for(let key in obj){
//         copy[key]=deepCopy(obj[key])
//     }

//     return copy
// }

// let object={
//     name:"ahamthbasha",
//     address:{
//         street:"saturday basha"
//     }
// }

// for(let key in object){
//     console.log(object[key])
// }

// let object2=deepCopy(object)

// object2.address.street="satuday antony"

// console.log(object)
// console.log(object2)

// let object={
//     name:"ahamthbasha",
//     address:{
//         street:"saturday basha"
//     }
// }

// function deepFreeze(obj){
//     const propNames=Object.getOwnPropertyNames(obj)

//     for(let name of propNames){
//         const value=obj[name]

//         if(value && typeof value === 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }


// let object2=deepFreeze(object)

// object2.address.street="basha"
// console.log(object2)


// function deepCopy(obj){
//     if(obj === null || typeof obj !== 'object'){
//         return obj
//     }

//     let copy=Array.isArray(obj)? []:{}

//     for(let key in obj){
//         copy[key]=deepCopy(obj[key])
//     }

//     return copy
// }


// function deepFreeze(obj){
//     const propNames=Object.getOwnPropertyNames(obj)

//     for(let name of propNames){
//         const value=obj[name]

//         if(value && typeof value === 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

// function sum(n){
//     let sum=0

//     for(let i=1;i<=n;i++){
//         sum+=i
//     }
//     return sum
// }

// const memoize=(fn)=>{
//     let cache={}
//     return function (args){
//         let no=args

//         if(no in cache){
//             return cache[no]
//         }else{
//             let result=fn(args)
//             cache[no]=result
//             return result
//         }
//     }
// }

// const eff=memoize(sum)

// console.time()
// console.log(eff(5))
// console.timeEnd()

// console.time()
// console.log(eff(5))
// console.timeEnd()

// function sum(n){
//     let sum=0

//     for(let i=0;i<=n;i++){
//         sum+=i
//     }
//     return sum
// }

// const memoization=(fn)=>{
//     let cache={}

//     return function(args){
//         let no=args
//         if(no in cache){
//             return cache[no]
//         }else{
//             let result=fn(args)
//             cache[no] = result
//             return result
//         }
//     }
// }

// const eff=memoization(sum)

// console.time()
// console.log(eff(5))
// console.timeEnd()

// console.time()
// console.log(eff(5))
// console.timeEnd()

// function deepCopy(obj){
//     if(obj === null || typeof obj !== 'object'){
//         return obj
//     }

//     let copy=Array.isArray(obj)? [] : {}

//     for(let key in obj){
//         copy[key]=deepCopy(obj[key])
//     }

//     return copy
// }

// function deepFreeze(obj){
// const propNames=Object.getOwnPropertyNames(obj)

// for(let name of propNames){
//     const value=obj[name]

//     if(value && typeof value==='object'){
//         deepFreeze(value)
//     }
// }

// return Object.freeze(obj)
// }

// function sum(n){
//     let sum=0
//     for(let i=1;i<=n;i++){
//         sum+=i
//     }
//     return sum
// }

// const memoization=(fn)=>{
//     let cache={}

//     return function (args){
//         let no=args

//         if(no in cache){
//             return cache[no]
//         }else{
//             let result=fn(args)
//             cache[no]=result
//             return result
//         }
//     }
// }

// const products = [
//     { name: "Laptop", price: 1200 },
//     { name: "Phone", price: 800 },
//     { name: "Tablet", price: 600 }
//   ];

//   let sum=0
//   for(let key of products){
//     sum +=key.price
//   }

//   console.log(sum)

// const users = [
//     { name: "Alice", age: 28 },
//     { name: "Bob", age: 34 },
//     { name: "Charlie", age: 25 }
//   ];

// let sum=0
// let c=0
  
// for(let key of users){
//     sum+=key.age
//     c++
// }

// let averageAge=Math.floor(sum/c)
// console.log(averageAge)

// const tasks = [
//     { task: "Clean room", done: true },
//     { task: "Study", done: false },
//     { task: "Workout", done: true }
//   ];

//   let c=0
//   for(let key of tasks){
//     if(key.done===true){
//         c++
//     }
//   }

//   console.log(c)

// const students = [
//     { name: "John", score: 75 },
//     { name: "Sara", score: 92 },
//     { name: "Mike", score: 85 }
//   ];

//   let high=students[0].score
//   let studentDetails
//   for(let key of students){
//     if(key.score > high){
//         high=key.score
//     }
//   }

//   console.log(high)

// const inventory = {
//     apples: 10,
//     bananas: 5,
//     oranges: 8
//   };

//   let sum=0
//   for(let key in inventory){
//     sum+=inventory[key]
//   }

//   console.log(sum)

// const grades = {
//     math: 85,
//     science: 90,
//     english: 78,
//     history: 88
//   };


//   let sum=0
//   let c=0
//   for(let key in grades){
//     sum+=grades[key]
//     c++
//   }

//  let average=Math.floor(sum/c)

//  console.log("average",average)

//  const recipe = {
//     flour: 500,
//     sugar: 200,
//     eggs: 6,
//     milk: 300
//   };

  
// let maxIngredient


// let quantity=0
// for(let key in recipe){
//     if(recipe[key] > quantity){
//         quantity=recipe[key]
//         maxIngredient=key
//     }
// }

// console.log(maxIngredient)


// const abc = [{hy: [{as: 4, bs: 8}]}, {cfd: [{az: 4, bw: [7,9]}]}, {ahy: [{aew: 4, bq: 8}]}]
// let arr=[]

// for(let key of abc){
//     for(let value in key){
//         for(let val of key[value]){
//             for(let final in val){
//                 arr.push(val[final])
//             }
//         }
//     }
// }

// let final=arr.flat()
// let sum=0
// for(let i=0;i<final.length;i++){
//     sum+=final[i]
// }
// console.log(sum)

// const efg = [{hy: [{as: 4, bs: 7}]}, [6, 8], 1,  {cfd: [{az: 4, bw: [7,9]}]}, {ahy: [{aew: 4, bq: 8}]}]


// for(let key of efg){
//     // console.log(key)
//     for(let val in key){
//         console.log(key[val])
//     }
// }
// let arr=[]

// for(let key of efg){
//     if(typeof key=== 'number'){
//         arr.push(key)
//     }
//     for(let value in key){
//        arr.push(key[value]) 
//     }
// }

// // console.log(arr)
// let final=[]
// for(let key of arr){
//     if(typeof key === 'number'){
//         final.push(key)
//     }
//     for(let val in key){
//         final.push(Object.values(key[val]).flat())
//     }
// }
// console.log(final)

// let result=final.flat()
// console.log(result)

// let sum=0
// for(let i=0;i<result.length;i++){
//     sum+=result[i]
// }

// console.log(sum)

// const str="Hi Hello How are you"

// const reversedStr=str.split('').reverse().join("")

// const final=reversedStr.split(' ').reverse().join(" ")
// console.log(final)

// function palindromeCheck(str){
//     let given=str
//     let check=str.split('').reverse().join('')
//     return given===check ? 'palindrome' : "not palindrome"
// }

// console.log(palindromeCheck("basha"))


// function anagram(str1,str2){
//     let given1=str1.split('').sort().join('')
//     let given2=str2.split('').sort().join('')

//     return given1 === given2 ? "anagram" : "not anagram"
// }

// console.log(anagram("silenc","listen"))

// let abcd={
//     a:10,
//     b:20,
//     c:-1,
//     d:0
// }


// for(let key in abcd){
//     if(abcd[key] <= 0){
//         delete abcd[key]
//     }
// }
// console.log(abcd)

// const numbers=[1, 2, 3, 4, 4, 5, 5, 6]

// const unique=new Set(numbers)
// console.log(unique)

// const setA = [1, 2, 3, 4];
// const setB = [3, 4, 5, 6];

// function unique(arr1,arr2){
//     let finalArr=[...arr1,...arr2]
//     const unique=new Set(finalArr)
//     return unique

// }

// console.log(unique(setA,setB))

// const setA = [1, 2, 3, 4];
// const setB = [3, 4, 5, 6];

// function intersect(arr1,arr2){
//     let finalArr=[]

//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i] == arr2[j]){
//                 if(!finalArr.includes(arr1[i])){
//                     finalArr.push(arr1[i])
//                 }
//             }
//         }
//     }

//     let unique=new Set(finalArr)

//     return unique
// }

// console.log(intersect(setA,setB))

// const setA = [1, 2, 3, 4];
// const setB = [3, 4, 5, 6];

// function diff(arr1,arr2){
//     const setB=new Set(arr2)

//     return arr1.filter((n)=>!(setB.has(n)))
// }

// console.log(diff(setA,setB))

// function setElements(arr,n){

// }

// const mySet = new Set([1, 2, 3, 4, 5]);
// const value = 3;

// for(let val of mySet){
//     if(value===val){
//         console.log(true)
//     }
// }

// console.log(mySet)

// const mySet = new Set([10, 20, 30, 40]);

// for(let val of mySet){
//     console.log(val)
// }

// const strings = ["apple", "banana", "apple", "orange", "banana", "banana"];


// const countFreq=

// let obj={
//     name:"basha",
//     address:{
//         street:"sss"
//     }
// }

// let obj2={...obj}

// function deepCopy(obj){
//     if(obj === null || typeof obj !== 'object'){
//         return obj
//     }

//     let copy= Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         copy[key]=deepCopy(obj[key])
//     }

//     return copy
// }

// const strings = ["apple", "banana", "apple", "orange", "banana", "banana"];

// const count=new Map()

// for(let val of strings){
//     if(count.has(val)){
//         count.set(val,count.get(val)+1)
//     }else{
//         count.set(val,1)
//     }
// }

// // console.log(count)

// for(let val of count){
//     console.log(val[1])
// }

// const employees = new Map([
//     ['Alice', 28],
//     ['Bob', 35],
//     ['Charlie', 24]
//   ]);

  
//   console.log(employees)

//   for(let age of employees){
//     console.log(age[1])
//   }

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
//   };

// const map=new Map()
  
// for(let key in obj){
//     map.set(key,obj[key])
// }

// console.log(map)

// const map = new Map([
//     ['name', 'John'],
//     ['age', 30]
//   ]);
//   const keys = 'name';
  
// if(map.has(keys)){
//     console.log(true)
// }else{
//     console.log(false)
// }

// const map = new Map([
//     ['name', 'Alice'],
//     ['age', 25],
//     ['city', 'New York']
//   ]);
//   let c=0
//   for(let val of map){
//     c++
//   }

//   console.log(c)

// const myMap = new Map([
//     ['name', 'John'],
//     ['age', 30],
//     ['city', 'Paris']
// ]);

// let obj={}

// for(let val of myMap){
//     obj[val[0]]=val[1]
// }

// console.log(obj)

// const map1 = new Map([
//     ['name', 'Alice'],
//     ['age', 25]
//   ]);
// const map2 = new Map([
//     ['city', 'New York'],
//     ['age', 30]
// ]);

// const finalMap=new Map([...map1,...map2])
// console.log(finalMap)

// Create a Map that stores students' names and their grades
// const studentsGrades = new Map([
//     ['John', 'A'],
//     ['Jane', 'B'],
//     ['Mike', 'A'],
//     ['Sarah', 'C']
//   ]);
  
// const uniqueGrad=new Set()

// studentsGrades.forEach((grade,name)=>{
//     uniqueGrad.add(name)
// })

// console.log(uniqueGrad)

const str='3a2b3c'

//aaabbccc
// let newStr=""
// for(let i=0;i<str.length;i++){
//     let c=Number(str[i])
//     let start=0
//     while(start<c){
//         newStr+=str[i+1]
//         start++
//     }
//     i=i+1
//     start=0
// }

// console.log("output will be",newStr)

// function upper(input){
//     return input.toUpperCase()
// }

// function use(input,upper){
//     return(upper(input))
// }

// console.log(use("ahamathbasha",upper))

// function forEach(nums,callback){
//     for(let i=0;i<nums.length;i++){
//         callback(nums[i] , i)
//     }
// }


// const nums=[1,2,3,4,5,6,7]

// forEach(nums,(elements,index)=>{
//     console.log(elements,index)
// })

// const fetchData=async(url)=>{
//     const response=await fetch(url)
//     const data=await response.json()
//     return data
// }


// function get(url,callback){
//     setTimeout(async()=>{
//         let finalData=await callback(url)
//         console.log(finalData)
//     },2000)
// }

// const _URL = `https://jsonplaceholder.typicode.com/users`
// get(_URL,fetchData)


// function fetchData(url,callback){
//     setTimeout(async()=>{
//         try {
//             const response=await fetch(url)
//             const data=await response.json()
//             callback(data)
//         } catch (error) {
//             callback(error)
//         }
//     },2000)
// }

// fetchData("https://api.example.com",(err,message)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(message.error)
//     }
// })


// let object={
//     name:"ahamathbasha",
//     address:{
//         street:"nadu street"
//     },
//     greet:function(){
//         console.log(this.name)
//     }
// }

// object.greet()

// const date=new Date()
// console.log(date.getTime())
// console.log(date.setDate())

// function* generator(){
//     let count=1

//     while(count){
//         yield count
//         count++
//     }
// }

// const value=generator()
// for(let i=1;i<=5;i++){
//     console.log(value.next().value)
// }

// const person ={
//     fullName:"Ahamathbasha",
//     greet:function(suffix,movie){
//         return this.fullName + " "+ suffix + "" + movie
//     }
// }

// const anotherPerson={
//     fullName:"ahamathbasha"
// }

// // console.log(person.greet.call(anotherPerson,"surya saturday"))

// // console.log(person.greet.apply(anotherPerson,["basha","oh my kadavule"]))

// const binding=person.greet.bind(anotherPerson)
// console.log(binding("hello","basha"))

// function getNo(callback){
//     let no=10
//     callback(no)
// }

// function addition(no,callback){
//     let number=no+no
//     callback(number)
// }

// function Check(no,callback){
//     callback(no % 2 === 0 ? 'even' :'odd')
// }

// getNo((no)=>{
//     addition(no,(result)=>{
//         console.log("result",result)
//        Check(no,(result)=>{
//         console.log(result)
//        })
//     })
// })

// function getUser(callback){
//     setTimeout(()=>{
//         callback({userId:1,name:"Ahamathbasha"})
//     },1000)
// }

// function getPosts(callback){
//     setTimeout(()=>{
//         callback(['post1','post2'])
//     })
// }

// getUser((userInfo)=>{
//     getPosts((postInfo)=>{
//         console.log(userInfo,postInfo)
//     })
// })

// function getUser(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("fetched user")
//             resolve({id:1,name:"ahamathbasha"})
//         },2000)
//     })
// }

// function getPost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("fetched post")
//             resolve(['post1','post2'])
//         },3000)
//     })
// }

// Promise.allSettled([getPost(),getUser()])
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })

// function getUser(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({id:1,name:"ahamathbasha"})
//         },1000)
//     })
// }

// function getPost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(['post1','post2'])
//         },1000)
//     })
// }

// async function getValue(){
//     try {
//         const getUserVal = await getUser()
//         const getPostVal = await getPost()

//         console.log(getUserVal,getPostVal)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getValue()

// let promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10)
//     },1000)
// })

// let promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(20)
//     },2000)
// })

// let promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },3000)
// })

// async function handlePromise(){
//     try {
//         const [result1,result2,result3] =await Promise.all([promise1,promise2,promise3])
//         console.log(result1+result2+result3)
//     } catch (error) {
//         console.log(error)
//     }
// }

// handlePromise()

//RETRY MECHANISMS

// function fakeApiCall() {
//     return new Promise((resolve, reject) => {
//         const success = Math.random() > 0.7; // 30% chance of success
//         setTimeout(() => {
//             if (success) {
//                 resolve("✅ Success");
//             } else {
//                 reject("❌ Failed");
//             }
//         }, 1000);
//     });
// }

// // async function retry(fn, retries = 3, delay = 1000) {
// //     for (let i = 0; i < retries; i++) {
// //         try {
// //             const result = await fn();
// //             console.log(`Attempt ${i + 1}:`, result);
// //             return result;
// //         } catch (error) {
// //             console.log(`Attempt ${i + 1}:`, error);
// //             if (i < retries - 1) {
// //                 await new Promise(res => setTimeout(res, delay)); // wait before retry
// //             }
// //         }
// //     }
// //     throw new Error("All retries failed");
// // }

// async function retryAlways(fn, retries = 3, delay = 1000) {
//     const results = [];

//     for (let i = 0; i < retries; i++) {
//         try {
//             const result = await fn();
//             console.log(`Attempt ${i + 1}: Success ->`, result);
//             results.push({ attempt: i + 1, result });
//         } catch (error) {
//             console.log(`Attempt ${i + 1}: Failed ->`, error);
//             results.push({ attempt: i + 1, error });
//         }
//     }

//     return results;
// }

// retryAlways(fakeApiCall, 3, 1500)
//     .then(res => console.log("Final Result:", res))
//     .catch(err => console.log("Final Error:", err.message));


// function fackeApiCall(){
//     return new Promise((resolve,reject)=>{
//         const success=Math.random() > 0.7
//         setTimeout(()=>{
//             if(success){
//                 resolve("success")
//             }
//             else{
//                 reject("failed")
//             }
//         },1000)
//     })
// }

// async function retry(fn,retry){
//     for(let i=0;i<retry;i++){
//         try {
//             const data=await fn()
//             console.log(`${i+1} ${data}`)
//         } catch (error) {
//             console.log(`${i+1} ${error}`)
//         }
//     }
// }

// retry(fackeApiCall,3)

// const user={
//     name:"ahamathbasha",
//     age:10
// }

// const handler={
//     get (target,property){
//         return target[property]
//     } ,

//     set (target,property,value){
//         target[property]=value
//     }
// }

// const proxyUser=new Proxy(user,handler)
// console.log(proxyUser)

// proxyUser.age=21

// console.log(proxyUser)
// console.log(user)

// const object={
//     name:"Ahamathbasha",
//     age:30
// }

// const handler={
//     get (target,property){
//         return target[property]
//     },

//     set(target,property,value){
//         console.log(`${target[property]} but you did not able to modify`)
//         return 
//     }
// }

// const proxyObject=new Proxy(object,handler)

// console.log(proxyObject)
// proxyObject.age=21
// console.log(proxyObject)

// const user={
//     name:"ahamathbasha",
//     age:23
// }

// const handler={
//     get (target,property){
//         return target[property]
//     },

//     set(target,property,value){
//         if(property == 'name' && value !== ''){
//             target[property]=value
//         }else{
//             console.log("cannot set empty values in string")
//         }

//         if(property == 'age' && value >0){
//             target[property]=value
//         }else{
//             console.log("age should be greater and positive")
//         }
//     }
// }

// const proxyObject=new Proxy(user,handler)
// console.log(proxyObject)

// proxyObject.age=21

// console.log(proxyObject)

// const defaultObject=new Proxy({},{
//     set(target,property,value){
//         target[property]=value || `default${property}`
//     }
// })

// defaultObject.name=''
// console.log(defaultObject)

// const object={
//     name:"ahamathbasha",
//     age:20
// }

// const handler={
//     get(target,property){
//         return target[property]
//     },

//     deleteProperty(target,property){
//         if(property == 'age'){
//             console.log("you cannot delete age")
//         }else{
//             delete target[property]
//         }
//     }
// }

// const proxyObject=new Proxy(object,handler)

// console.log(proxyObject)

// delete proxyObject.age

// console.log(proxyObject)


// const arr = [[1, 2], [3, 4], [5]];
// const flat = arr.reduce((acc,curr)=>{
//    return acc.concat(curr)
// },[])
// console.log(flat)

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// // Output: { apple: 3, banana: 2, orange: 1 }

// const obj=fruits.reduce((acc,curr)=>{
//     acc[curr]=(acc[curr]||0)+1
//     return acc
// },{})

// console.log(obj)

// const arr = [1, 2, 2, 3, 1, 4];

// const unique=arr.reduce((acc,curr)=>{

//     if(!acc.includes(curr)){
//         acc.push(curr)
//     }

//     return acc
// },[])


// console.log(unique)

// const words = ["apple", "banana", "cherry", "date"];

// const LongestWord=words.reduce((acc,curr)=>{
//     return curr.length > acc.length ? curr : acc
// },'')

// console.log(LongestWord)

// const nums = [1, 2, 3];

// // const dNo=nums.map((no)=>{
// //     return no*no
// // })

// // console.log(dNo)

// const doubleNo=nums.reduce((acc,curr)=>{
//     acc.push(curr*2)
//     return acc
// },[])

// console.log(doubleNo)

// const nums = [1, 2, 3, 4, 5];

// const evenNo=nums.reduce((acc,curr)=>{
//     if(curr % 2== 0){
//         acc.push(curr)
//     }
//     return acc
// },[])

// console.log(evenNo)

// const people = [
//     { name: "Alice", age: 21 },
//     { name: "Bob", age: 21 },
//     { name: "Charlie", age: 25 }
//   ];


// const groupByAge=people.reduce((acc,curr)=>{
//     if(!acc[curr.age]){
//         acc[curr.age] = []
//     }

//     acc[curr.age].push(curr)
//     return acc
// },{})

// console.log(groupByAge)

//largest

// const nums = [10, 25, 14, 7, 63, 82, 53, 29, 15];

// const result=nums.reduce((acc,curr)=>{
//     if(curr > acc.largest){
//         acc.fourthLargest=acc.thirdLargest
//         acc.thirdLargest=acc.secondLargest
//         acc.secondLargest=acc.largest
//         acc.largest=curr
//     }
//     else if(curr > acc.secondLargest){
//         acc.fourthLargest=acc.thirdLargest
//         acc.thirdLargest=acc.secondLargest
//         acc.secondLargest=curr
//     }
//     else if(curr > acc.thirdLargest){
//         acc.fourthLargest=acc.thirdLargest
//         acc.thirdLargest=curr
//     }else if(curr > acc.fourthLargest){
//         acc.fourthLargest=curr
//     }

//     return acc
// },{
//     largest:-Infinity,
//     secondLargest:-Infinity,
//     thirdLargest:-Infinity,
//     fourthLargest:-Infinity
// })

// console.log("First largest:", result.largest);
// console.log("Second largest:", result.secondLargest);
// console.log("Third largest:", result.thirdLargest);
// console.log("Fourth largest:", result.fourthLargest);


// //smallest

// const nums = [10, 25, 14, 7, 63, 82, 53, 29, 15];

// const result=nums.reduce((acc,curr)=>{
//     if(curr < acc.smallest){
//     acc.fourthSmallest=acc.thirdSmallest
//     acc.thirdSmallest=acc.secondSmallest
//     acc.secondSmallest=acc.smallest
//     acc.smallest=curr
//     }
//     else if(curr < acc.secondSmallest){
//         acc.fourthSmallest=acc.thirdSmallest
//         acc.thirdSmallest=acc.secondSmallest
//         acc.secondSmallest=curr
//     }
//     else if(curr < acc.thirdSmallest){
//         acc.fourthSmallest=acc.thirdSmallest
//         acc.thirdSmallest=curr
//     }
//     else if(curr < acc.fourthSmallest){
//         acc.fourthSmallest=curr
//     }
//     return acc
// },
// {
// smallest:Infinity,
// secondSmallest:Infinity,
// thirdSmallest:Infinity,
// fourthSmallest:Infinity
// })

// console.log('1',result.smallest)
// console.log('2',result.secondSmallest)
// console.log('3',result.thirdSmallest)
// console.log('4',result.fourthSmallest)

// const ab=[{a:[3,34,33],n:34},{a:[3,34,33],n:34},{a:[3,34,33],n:34},{a:[3,34,33],n:34}]
// let n=[]
// for(let i of ab){
//     for(let key in i){
//         n.push(i[key])
//     }
// }

// n.flat(1)

// let sum=n.flat(1).reduce((acc,cur)=>{
//    return acc+cur
// })

// console.log(sum)

// function getUser(userId, callback) {
//     setTimeout(() => {
//         console.log("User fetched");
//         callback({ id: userId, name: "John Doe" });
//     }, 1000);
// }

// function getOrders(user, callback) {
//     setTimeout(() => {
//         console.log("Orders fetched for", user.name);
//         callback([{ id: 1, item: "Laptop" }, { id: 2, item: "Phone" }]);
//     }, 1000);
// }

// function getOrderDetails(order, callback) {
//     setTimeout(() => {
//         console.log("Order details fetched for", order.item);
//         callback({ orderId: order.id, status: "Shipped" });
//     }, 1000);
// }

// Callback Hell
// getUser(101, function(user) {
//     getOrders(user, function(orders) {
//         getOrderDetails(orders[0], function(details) {
//             console.log("Final order detail:", details);
//         });
//     });
// });


// const obj={
//     name:'basha',

//     getRole(name){
//         return `${this.name} is a developer`
//     }
// }

// const obj2={
//     name:"sharuk",
//     __proto__:obj
// }

// console.log(obj.getRole(obj.name))

// console.log(obj2.getRole(obj2.name))

// const obj={
//     name:"basha",
//     age:20,
//     address:{
//         street:"nadu street"
//     }
// }

// const handler={
//     get(obj,key){
//         return obj[key]
//     },

//     set(obj,key,value){
//         obj[key] = value
//     }
// }

// const proxyObject=new Proxy(obj,handler)

// console.log(proxyObject.name)

// proxyObject.name="Ahamathbasha"

// console.log(obj.name)

// class Animal{
//     constructor(name){
//         this.name=name
//     }

//     speak(name){
//         console.log(`${this.name} speak`)
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }
// }

// const puppy=new Dog('puppy')

// puppy.speak()


// const arr = [1, 3, 2, 1, 4, 3, 1, 5, 3, 3];

// let map=new Map()

// for(let i=0;i<arr.length;i++){
//     if(map[arr[i]]){
//         map[arr[i]]++
//     }else{
//         map[arr[i]]=1
//     }
// }

// const sorted=Object.entries(map).sort((a,b)=>b[1]-a[1])

// function* values(limit){
//     let count=1

//     while(count <= limit){
//         yield count
//         count++
//     }
// }

// const val=values(10)

// for(let i=1;i<=10;i++){
//     console.log(val.next().value)
// }


// function factory(name,age){
//     return {
//         name:name,
//         age:age,
//         greet:function(){
//             console.log(`name is ${this.name} and age is ${this.age}`)
//         }
//     }
// }

// const factory1=factory("ahamathbasha",20)

// console.log(factory1)

const arr=[21,22,90,80,100,12,1,70]

let first=-Infinity
let second=-Infinity
let third=-Infinity


for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 === 0){
        if(arr[i] > first){
            third=second
            second=first
            first=arr[i]
        }
        else if(arr[i] > second && arr[i] != first){
            third=second
            second=arr[i]
        }
        else if(arr[i] > third && arr[i] != first && arr[i] != second){
            third=arr[i]
        }
    }
}
console.log("first",first)
console.log("second",second)
console.log("third",third)

// let evenArr=[]

// for(let i=0;i<arr.length;i++){
//     if(arr[i] % 2 === 0){
//         evenArr.push(arr[i])
//     }
// }


// let result=evenArr.reduce((acc,cur)=>{

//     if(acc.set.has(cur)){
//         return acc 
//     }

//     acc.set.add(cur)

//     if(cur > acc.firstLargest){
//         acc.secondLargest=acc.firstLargest
//         acc.firstLargest=cur
//     }
//     else if(cur > acc.secondLargest){
//         acc.secondLargest=cur
//     }

//     return acc
    
// },{
//     set:new Set(),
//     firstLargest:-Infinity,
//     secondLargest:-Infinity
// })

// console.log(result.secondLargest)