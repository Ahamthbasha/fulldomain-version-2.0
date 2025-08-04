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

function deepCopy(obj){
    if(obj == null || typeof obj != 'object'){
        return obj
    }

    const copy = Array.isArray(obj) ? [] :{}

    for(let key in obj){
        copy[key] = deepCopy(obj[key])
    }

    return copy
}

const original={a:1,b:2,c:{d:3},e:[4,5,6]}
const dCopy=deepCopy(original)
console.log("original without any change:",original)
console.log("copied from original:",dCopy)
dCopy.c.d=7
console.log("original value remains unchanged after modification in copy:",original)
console.log("value only modified in copied version:",dCopy)
