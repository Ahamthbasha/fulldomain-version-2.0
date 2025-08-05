//normal destructure
// const person={
//     name:"vishnu G.R",
//     role:"reviewer",
//     anotherFace:"periya developer"
// }

// const {name,role,anotherFace} = person

// console.log(name,role,anotherFace)

//default destructure

// const obj1={
//     name:"vipin vargheese",
//     role:"reviewer"
// }

// const {name,role,salary=1000} = obj1

// console.log(name,role,salary)

//rename destructrue

// const obj2={
//     name:"harrish",
//     role:"developer"
// }


// const{name:fullName} = obj2

// console.log(fullName)

//nested object destructure

// const obj4={
//     id:"1",
//     profile:{
//         name:"vignesh",
//         age:30
//     }
// }


// const {id,profile:{name,age}} = obj4

// console.log(name,age,id)

//method

// const calci = {
//     add(x,y){
//         return x+y
//     },
//     sub(x,y){
//         return x-y
//     }
// }


// console.log(calci.add(5,5))
// console.log(calci.sub(5,5))

//based on this

// const example = {
//     name:"ahamathbasha",
//     greet(){
//         return `hi ${this.name}`
//     }
// }

// console.log(example.greet())

//method chaining

// const chain = {
//     value : 0,
//     add(x){
//         this.value += x
//     },
//     print(){
//         console.log(this.value)
//     }
// }

// chain.add(10)
// chain.print()

// /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/


// let str ='dhurandhar'
// console.log(str.padStart(20,1))

// const no = new Number(123)
// console.log(no.valueOf())


// let copyWithIn = [1,2,3,4,5]

// copyWithIn.copyWithin(1,3,4)

// console.log(copyWithIn)

// let arr = [1,2,3,4]

// arr.forEach((val,index)=>{
//     arr[index] = val * 10
// })

// console.log(arr)

// const val = arr.find((val)=>{
//     return val > 2
// })

// console.log(val)

// const firstIndex = arr.findIndex((val)=>{
//     return val >2
// })

// console.log(firstIndex)

// const lastIndex = arr.findLast((val)=>{
//     return val > 2
// })

// console.log(lastIndex)'

// (function add(x,y){
//     console.log(x+y)
//     return
// })(10,20)

// function detail(){
//     return `my name is ${this.name}`
// }

// const obj={
//     name:"ahamathbasha"
// }

// console.log(detail.call(obj))


// function details(product,price){
//     return `my name is ${this.name}.The product name is ${product} and the price is ${price}`
// }

// const object = {
//     name:"basha"
// }

// console.log(details.apply(object,['slot',1000]))

// function details2(){
//     return `my name is ${this.name}`
// }

// const object2 = {
//     name : "r.j.balaji"
// }

// const newFn = details2.bind(object2)
// console.log(newFn())


// function *AlternateEven(){
//     let start = 100

//     while(start >= 0){
//         yield start
//         start = start -2
//     }
// }

// const alternate = AlternateEven()

// for(let i=1;i<=50;i++){
//     if(i%2 == 0){
//         alternate.next()
//     }
//     else{
//         console.log(alternate.next().value)
//     }
// }


// function outerScope(){
//     let count = 0
//     return function innerFunction(){
//         count++
//         return count
//     }
// }

// const variable = outerScope()

// console.log(variable())
// console.log(variable())

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// const addition = add(1)(2)(3)
// console.log(addition)


//setTimeout

// function fetchData(callback){
//     setTimeout(()=>{
//         callback(2,5)
//     },1000)
// }

// fetchData((a,b)=>{
//     console.log(a+b)
// })

//callback hell

// function getNo(callback){
//     let no = 9
//     setTimeout(()=>{
//         callback(no)
//     })
// }


// function square(a,callback){
//     setTimeout(()=>{
//         let result = a * a
//         callback(result)
//     })
// }

// getNo((a)=>{
//     square(a,(result)=>{
//         console.log(result)
//     })
// })

//error first callback

// function operation(callback){
//     setTimeout(()=>{
//         let error = 0
//         callback(error,'success')
//     })
// }

// operation((error,result)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(result)
//     }
// })


// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let no = 10
//         if(no){
//             resolve(no)
//         }else{
//             reject('invalid no')
//         }
//     })
// })

// promise
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.log(err)
// })


// let obj = {
//     a:1,
//     d:{
//         c:1
//     }
// }

// let copy = obj
// copy.d.c=5

// console.log(obj)
// console.log(copy)



// let obj = {
//     a:1,
//     d:{
//         c:1
//     }
// }

// let copy = JSON.parse(JSON.stringify(obj))

// copy.d.c = 5

// console.log(obj)
// console.log(copy)

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

// const original={a:1,b:2,c:{d:3},e:[4,5,6]}
// const dCopy=deepCopy(original)
// console.log("original without any change:",original)
// console.log("copied from original:",dCopy)
// dCopy.c.d=7
// console.log("original value remains unchanged after modification in copy:",original)
// console.log("value only modified in copied version:",dCopy)



// const obj = {
//     name:"ahamathbasha",
//     greet(){
//         return this.name
//     }
// }

// console.log(obj.greet())

// function name(name){
//     this.name = name
// }

// const basha = new name('basha')
// console.log(basha.name)



// const obj = {
//     name:"ahamathbasha",
//     greet:()=>{
//         console.log(this.name)
//     },
//     wish(){
//         console.log(this.name)
//     }
// }
// obj.greet()
// obj.wish()


// class Animal{
//     constructor(name){
//         this.name = name
//     }

//     greet(){
//         console.log('good morning')
//     }
// }

// class Cat extends Animal{
//     constructor(name){
//         super(name)
//     }

//     sound(){
//         console.log('meow')
//     }
// }

// const animal = new Cat()

// animal.sound()
// animal.greet()


// function greet(name){
//     this.name = name
// }

// const good = new greet('basha')
// console.log(good.name)


// class Animal{
//     constructor(name){
//         this.name = name
//     }

//     speak(){
//         console.log('speak any language')
//     }
// }

// class Cat extends Animal{

//     speak(){
//         super.speak()
//         console.log('meow')
//     }
// }

// const cat = new Cat()
// cat.speak()


// const calculator = {
//     add:(x,y)=>{
//         return x+y
//     }
// }

// const sum = calculator.add(5,5)
// console.log(sum)


// const name = {
//     firstName : 'pandi',
//     secondName :'bullet',
//     getFullName(){
//         console.log(this.firstName+this.secondName)
//     },
//     setFullName(firstName,secondName){
//         this.firstName = firstName
//         this.secondName = secondName
//     }
// }

// name.getFullName()

// name.setFullName("bullet","pandi")

// name.getFullName()

//prototype
// function calculator(){}

// calculator.prototype.add=function(a,b){
//     return a+b
// }

// const operation = new calculator()

// console.log(operation.add(2,4))


//prototype chain

// function calci() {}

// calci.prototype.add = function(a,b){
//     return a+b
// }

// function highCalci(){
//     calci.call(this)
// }

// highCalci.prototype = Object.create(calci.prototype)

// highCalci.prototype.constructor = highCalci

// highCalci.prototype.multi = function(a,b){
//     return a*b
// }

// const operation = new highCalci()

// console.log(operation.add(5,5))
// console.log(operation.multi(10,20))

// const object1 = {
//     name:'ahamathbasha',
//     getName(){
//         return this.name
//     }
// }

// const object2 = {
//     departments:['textiles','marketing'],
//     _proto_ : object1
// }

// const object3 = {
//     _proto_:object2,
// }

// console.log(object3._proto_._proto_.name)


// const Animal = {
//     makeSound(){
//         return this.sound
//     }
// }

// const Cat = {
//     sound:"meow",
//     __proto__:Animal
// }

// const Puppy = {
//     sound:"wow",
//     __proto__:Cat
// }

// console.log(Puppy.makeSound())
// console.log(Cat.makeSound())


// const object = {
//     name:'ahamathbasha',
// }

// const handler = {
//     get(target,props){
//         return props in target ? target[props] : "property does not exist"
//     },
//     set(target,props,value){
//         if(props == 'name'){
//             target[props] = value
//         }else{
//             return 'invalid props'
//         }
//     }
// }

// const proxyObject = new Proxy(object,handler)

// console.log(proxyObject.name)

// console.log(proxyObject.age = 10)

// console.log(proxyObject)

// proxyObject.name = "manickbasha"

// console.log(proxyObject)
// console.log(object)



// let weekSet = new WeakSet()
// let obj1 = {a:1}
// weekSet.add(obj1)
// console.log(weekSet)

//encapsulation

// class BankAccount{
//     constructor(balance){
//         let _balance = balance

//         this.credit = function(balance){
//             _balance += balance
//         }

//         this.debit = function(balance){
//             if(_balance >= balance){
//                 _balance -= balance
//             }else{
//                 return 'no debit possible'
//             }
//         }

//         this.getBalance = function(){
//             return _balance
//         }
//     }
// }

// const bank = new BankAccount(2000)

// bank.credit(1000)

// console.log(bank.getBalance())

// console.log(bank.debit(4000))


// class Animal{
//     constructor(name){
//         this.name = name
//     }
// }

// class Cat extends Animal{
//     speak(){
//         console.log('meow')
//     }
// }

// const tom = new Cat('tom')
// tom.speak()

// const object = {
//     name:'tom',
//     speak(){
//         return this.name
//      }
// }

// const dog = Object.create(object)
// console.log(dog.speak())

//multilevel - class to class to class

//hierarchial -  all class from same base class

//multiple - does not support.Mixins({(){}})



//deep copy

// function deepCopy(obj){
//     if(obj != null || typeof obj === 'object'){
//         return obj
//     }

//     const copy = Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         copy[key] = deepCopy(obj[key])
//     }

//     return copy
// }


// function deepFreeze(obj){
//     const propNames = Object.getOwnPropertyNames(obj)

//     for(let name of propNames){
//         const value = obj[name]

//         if(value && typeof value === 'object'){
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


// const object = {
//     name:"ahamathbasha",
// }

// const handlet = {
//     get(target,props){
//         return props in target ? target[props] : 'props does not exist in target'
//     },
//     set(target,props,value){
//         if(props == 'name'){
//             target[props] = value
//         }else{
//             console.log('props does not exist in the target')
//         }
//     }
// }

// const proxyObject = new Proxy(object,handlet)

// console.log(proxyObject.name)

// console.log(object)

// proxyObject.name = "kottukaali"

// console.log(proxyObject)

// console.log(object)

// let arr = [10,11,20,1,2,3,4,5,100,100,2000]

// function findLargest(arr){
//     let largest = arr.reduce((acc,cur)=>{
//         if(([acc.first,acc.second,acc.third,acc.fourth,acc.fifth]).includes(cur)){
//             return acc
//         }

//         if(cur > acc.first){
//             acc.fifth = acc.fourth
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur > acc.second){
//             acc.fifth = acc.fourth
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(cur > acc.third){
//             acc.fifth = acc.fourth
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(cur > acc.fourth){
//             acc.fifth = acc.fourth
//             acc.fourth = cur
//         }
//         else if(cur > acc.fifth){
//             acc.fifth = cur
//         }

//         return acc

//     },{
//         first:-Infinity,
//         second:-Infinity,
//         third:-Infinity,
//         fourth:-Infinity,
//         fifth:-Infinity
//     },
// )
// return largest
// }

// console.log(findLargest(arr))



// function findSmallest(arr){
//     let smallest = arr.reduce((acc,cur)=>{
//         if(([acc.first,acc.second,acc.third,acc.fourth,acc.fifth]).includes(cur)){
//             return acc
//         }

//         if(cur < acc.first){
//             acc.fifth = acc.fourth
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur < acc.second){
//             acc.fifth = acc.fourth
//             acc.fourth  = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(cur < acc.third){
//             acc.fifth = acc.fourth
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(cur < acc.fourth){
//             acc.fifth = acc.fourth
//             acc.fourth = cur
//         }
//         else if(cur < acc.fifth){
//             acc.fifth = cur
//         }

//         return acc
//     },
// {
//     first : Infinity,
//     second: Infinity,
//     third : Infinity,
//     fourth : Infinity,
//     fifth : Infinity
// })

// return smallest
// }

// console.log(findSmallest([-10,-9,200,1,1,100,2,2,]))


// let string = "hello basha how are you i"

// let array = string.split(' ')

// function smallestWord(arr){
//     let smallestWord = arr.reduce((acc,cur)=>{
//         if([acc.first.length,acc.second.length,acc.third.length].includes(cur.length)){
//             return acc
//         }

//         if(acc.first == '' || cur.length < acc.first.length){
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(acc.second == '' || cur.length < acc.second.length){
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(acc.third == '' || cur.length < acc.third.length){
//             acc.third = cur
//         }

//         return acc

//     },
//     {
//         first:'',
//         second:'',
//         third:''
//     }
// )

// return smallestWord
// }

// console.log(smallestWord(array))

// function largestWord(arr){
//     let wordLargest = arr.reduce((acc,cur)=>{
//         if([acc.first.length,acc.second.length,acc.third.length].includes(cur)){
//             return acc
//         }

//         if(cur.length > acc.first.length){
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur.length > acc.second.length){
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(cur.length > acc.third.length){
//             acc.third = cur
//         }
//         return acc
//     },
//     {
//         first : '',
//         second : '',
//         third : ''
//     }
// )
// return wordLargest
// }

// console.log(largestWord(array))