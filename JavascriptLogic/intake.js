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


function deepCopy(obj){
    if(obj == null || typeof obj != "object"){
        return obj
    }

    let copy = Array.isArray(obj) ? [] : {}

    for(let key in obj){
        copy[key] = deepCopy(obj[key]) 
    }

    return copy
}

class Animal{
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(' yes dude')
    }
}
